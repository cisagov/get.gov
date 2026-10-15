const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const template = fs.readFileSync(path.join(__dirname, '../_includes/meta.html'), 'utf8');
const scripts = [...template.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map((match) => match[1]).join('\n');
const flush = () => new Promise((resolve) => setImmediate(resolve));

function deferred() {
  let resolve;
  const promise = new Promise((done) => { resolve = done; });
  return { promise, resolve };
}

function setup() {
  const requests = [];
  const elements = new Map();
  for (const id of ['domain-input', 'second-input', 'result', 'second-result',
    'grid-row--domain_message-choosing']) {
    const classes = new Set(['display-none']);
    elements.set(id, {
      value: '', innerHTML: '',
      classList: {
        contains: (name) => classes.has(name),
        add: (name) => classes.add(name),
        remove: (name) => classes.delete(name),
      },
    });
  }
  const context = {
    URL,
    console: { log() {} },
    document: { getElementById: (id) => elements.get(id) },
    event: { preventDefault() {} },
    fetch(url) {
      const request = { ...deferred(), url };
      requests.push(request);
      return request.promise;
    },
  };
  context.window = context;
  vm.runInNewContext(scripts, context, { filename: '_includes/meta.html' });
  return {
    requests, elements,
    submit(value, input = 'domain-input', result = 'result', choosing = false) {
      elements.get(input).value = value;
      context.checkDomainAvailability(input, choosing, result);
    },
    async respond(index, response) {
      requests[index].resolve({ json: () => Promise.resolve(response) });
      await flush();
    },
    html(id = 'result') { return elements.get(id).innerHTML; },
  };
}

test('an older success cannot overwrite a newer unavailable result', async () => {
  const page = setup();
  page.submit('first-city');
  page.submit('second-city');
  await page.respond(1, { available: false, message: 'That domain isn’t available.' });
  const latest = page.html();
  assert.match(latest, /second-city\.gov/);
  await page.respond(0, { available: true });
  assert.equal(page.html(), latest);
});

test('an older failure is ignored while the latest lookup is pending', async () => {
  const page = setup();
  page.submit('first-city');
  page.submit('second-city');
  await page.respond(0, { available: false, message: 'Old error' });
  assert.equal(page.html(), '');
  await page.respond(1, { available: true });
  assert.match(page.html(), /That domain is available/);
});

test('an empty submission invalidates the previous lookup', async () => {
  const page = setup();
  page.submit('first-city');
  page.submit('');
  const emptyMessage = page.html();
  assert.match(emptyMessage, /Enter the \.gov domain/);
  assert.equal(page.requests.length, 1);
  await page.respond(0, { available: true });
  assert.equal(page.html(), emptyMessage);
});

test('lookups using different result containers remain independent', async () => {
  const page = setup();
  page.submit('first-city');
  page.submit('second-city', 'second-input', 'second-result');
  await page.respond(1, { available: false, message: 'Second result' });
  await page.respond(0, { available: true });
  assert.match(page.html(), /That domain is available/);
  assert.match(page.html('second-result'), /Second result/);
});

test('a delayed JSON body cannot overwrite a newer result', async () => {
  const page = setup();
  const body = deferred();
  page.submit('first-city');
  page.requests[0].resolve({ json: () => body.promise });
  await flush();
  page.submit('second-city');
  await page.respond(1, { available: false, message: 'Latest result' });
  const latest = page.html();
  body.resolve({ available: true });
  await flush();
  assert.equal(page.html(), latest);
});

test('repeated lookups of the same domain still use the latest response', async () => {
  const page = setup();
  page.submit('same-city');
  page.submit('same-city');
  await page.respond(1, { available: false, message: 'Latest result' });
  const latest = page.html();
  await page.respond(0, { available: true });
  assert.equal(page.html(), latest);
});

test('stale responses do not reveal the domain-choosing message container', async () => {
  const page = setup();
  page.submit('first-city', 'domain-input', 'result', true);
  page.submit('second-city', 'domain-input', 'result', true);
  await page.respond(0, { available: true });
  const container = page.elements.get('grid-row--domain_message-choosing');
  assert.equal(container.classList.contains('display-none'), true);
  await page.respond(1, { available: true });
  assert.equal(container.classList.contains('display-none'), false);
});
