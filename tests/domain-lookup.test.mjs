import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { setImmediate } from 'node:timers/promises';
import test from 'node:test';
import vm from 'node:vm';
import { Liquid } from 'liquidjs';

const template = await readFile(new URL('../_includes/meta.html', import.meta.url), 'utf8');
const engine = new Liquid();
engine.registerFilter('url', value => `/preview${value}`);

for (const [name, ga, analyticsEnabled] of [
  ['missing analytics configuration', undefined, false],
  ['missing tracking ID', {}, false],
  ['disabled tracking ID', { gtag: false }, false],
  ['enabled tracking ID', { gtag: 'G-TEST' }, true],
]) {
  test(`domain lookup works with ${name}`, async () => {
    const html = await engine.parseAndRender(template, {
      site: { title: 'Test site', ga },
      page: { url: '/domains/whois/' },
      assetPaths: {},
    });
    const elements = {
      'domain-input': { value: 'example' },
      'usa-search--domain_message': { innerHTML: '' },
      'rdap-search-results': { innerHTML: '' },
    };
    const requests = [];
    const context = vm.createContext({
      URL,
      document: {
        getElementById: id => elements[id],
        createElement: () => ({ innerHTML: '', classList: { add() {} } }),
      },
      event: { preventDefault() {} },
      fetch: async url => {
        requests.push(url.toString());
        return { json: async () => ({ available: true }) };
      },
    });
    context.window = context;
    for (const [, attributes, source] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
      if (!/\bsrc\s*=/.test(attributes)) vm.runInContext(source, context);
    }

    assert.equal(typeof context.checkDomainAvailability, 'function');
    assert.equal(typeof context.render_result, 'function');
    assert.equal(typeof context.createCard, 'function');
    context.checkDomainAvailability();
    await setImmediate();
    assert.deepEqual(requests, ['https://manage.get.gov/api/v1/available/?domain=example']);
    assert.match(elements['usa-search--domain_message'].innerHTML, /That domain is available/);

    const card = context.createCard('Example contact', 'Contact Information');
    context.render_result('rdap-search-results', card.innerHTML);
    assert.match(elements['rdap-search-results'].innerHTML, /Contact Information/);
    assert.match(elements['rdap-search-results'].innerHTML, /Example contact/);

    assert.equal(html.includes('googletagmanager.com/gtag/js'), analyticsEnabled);
    assert.equal(typeof context.gtag === 'function', analyticsEnabled);
    if (analyticsEnabled) {
      assert.equal(context.dataLayer[1][0], 'config');
      assert.equal(context.dataLayer[1][1], 'G-TEST');
    } else {
      assert.equal(context.dataLayer, undefined);
    }
  });
}
