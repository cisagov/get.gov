const { DateTime } = require('luxon');
const fs = require('fs');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginNavigation = require('@11ty/eleventy-navigation'); // Allows nested side nav items.
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');
const yaml = require("js-yaml");
const svgSprite = require("eleventy-plugin-svg-sprite");
const { imageShortcode, imageWithClassShortcode } = require('./config');

// This package allows us to set a .env file in our local environments
const dotenv = require('dotenv');
dotenv.config();


module.exports = function (config) {
  // Set pathPrefix for site
  let pathPrefix = '/';

  // Copy the `admin` folders to the output
  config.addPassthroughCopy('admin');

  // Copy the `robots.txt` file to the output
  config.addPassthroughCopy('robots.txt');
  
  // Copy USWDS init JS so we can load it in HEAD to prevent banner flashing
  config.addPassthroughCopy({'./node_modules/@uswds/uswds/dist/js/uswds-init.js': 'assets/js/uswds-init.js'});

  //assetPaths is in gitignore but we still want to watch and  for changes to build
  config.ignores.delete('_data/assetPaths.json');
  config.watchIgnores.delete('_data/assetPaths.json');
  
  // Add plugins
  config.addPlugin(pluginRss);
  config.addPlugin(pluginNavigation);

  //// SVG Sprite Plugin for USWDS USWDS icons
  config.addPlugin(svgSprite, {
    path: "./node_modules/@uswds/uswds/dist/img/uswds-icons",
    svgSpriteShortcode: 'uswds_icons_sprite',
    svgShortcode: 'uswds_icons'
  });

  //// SVG Sprite Plugin for USWDS USA icons
  config.addPlugin(svgSprite, {
    path: "./node_modules/@uswds/uswds/dist/img/usa-icons",
    svgSpriteShortcode: 'usa_icons_sprite',
    svgShortcode: 'usa_icons'
  });

  // Copy the favicon
  config.addPassthroughCopy({
    "favicon.ico": "favicon.ico",
  });

  config.addPassthroughCopy({
    "_img/favicons": "/img/favicons",
  });

  // Allow yaml to be used in the _data dir
  config.addDataExtension("yaml", contents => yaml.load(contents));

  config.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'dd LLL yyyy'
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  // Sitemap will not load the overwritten absoluteUrl filter,
  // so we'll define a fresh custom filter that'll use the SITE_URL
  // env variable to build the full url.
  config.addFilter("customAbsoluteUrl", function(url) {
    return process.env.SITE_URL ? process.env.SITE_URL + url : url;
  });

  // Get the first `n` elements of a collection.
  config.addFilter('head', (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  config.addFilter('min', (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1
    );
  }

  config.addFilter('filterTagList', filterTagList);

  // Create an array of all tags
  config.addCollection('tagList', function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // Array of blog post tags
  config.addCollection('blogTags', function(collection) {
    let tagSet = new Set();
    collection.getFilteredByTag("posts").forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag)); 
    });

    return filterTagList([...tagSet]);
  });

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: false,
  }).use(markdownItAttrs).use(markdownItAnchor);
  config.setLibrary('md', markdownLibrary);

  // Override Browsersync defaults (used only with --serve)
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('_site/404/index.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  // Set image shortcodes
  config.addLiquidShortcode('image', imageShortcode);
  config.addLiquidShortcode('image_with_class', imageWithClassShortcode);
  config.addLiquidShortcode("uswds_icon", function (name) {
    return `
    <svg class="usa-icon" aria-hidden="true" role="img">
      <use xlink:href="#svg-${name}"></use>
    </svg>`;
  });

  // Set the modal 
  //
  //
  // We're hardcoding all this stuff instead of using params to
  // get this deployed quickly. If we use another modal on the site,
  // we should consider refactoring this to a paired shortcode with
  // multiple params. If we use 3+ different modals on the site, we
  // HAVE to refactor this.
  
  // Button trigger
  config.addLiquidShortcode('modal-trigger--button', function () {
    return `<a href="#modal-start-application" class="usa-button" aria-controls="modal-start-application" data-open-modal>Start a .gov domain request</a>`;
  });

  // Inline link trigger
  config.addLiquidShortcode('modal-trigger--inline', function () {
    return `<a href="#modal-start-application" class="usa-button usa-button--unstyled" aria-controls="modal-start-application" data-open-modal>Start a .gov domain request</a>`;
  });

  // Modal body (always pair with a trigger)
  // Minified to avoid whitespace issues in rendering 
  config.addLiquidShortcode('modal-body', function () {
    return `<div class="usa-modal" id="modal-start-application" aria-labelledby="modal-start-application-heading" aria-describedby="modal-start-application-description"><div class="usa-modal__content"><div class="usa-modal__main"><h2 class="usa-modal__heading utility-header" id="modal-start-application-heading">Requirements for requesting a .gov domain</h2><div class="usa-prose"><ul><li>You must be a government employee, or be working on behalf of a government organization, to request a .gov domain.</li><li><a class="usa-link--external" href="https://login.gov/help/get-started/create-your-account/">You must have a Login.gov account</a>. Login.gov provides a simple and secure process for signing in to many government services with one account.<ul><li>Before you request your first .gov domain, you must verify your identity with Login.gov. This is a necessary layer of security that requires you to prove you are you, and not someone pretending to be you. <a href="https://get.gov/help/account-management/#get-help-with-login.gov">Get help with Login.gov</a>.</li></ul></li></ul><p>If you have <a href="https://get.gov/domains/before/#information-you%E2%80%99ll-need-to-complete-the-domain-request-form">the information you need</a>, requesting your domain might take around 15 minutes. </p></div><div class="usa-modal__footer"><ul class="usa-button-group"><li class="usa-button-group__item"><a class="usa-button" href="https://manage.get.gov/request/">Continue to Login.gov</a></li><li class="usa-button-group__item"><button type="button" class="usa-button usa-button--unstyled padding-105 text-center" data-close-modal>Cancel</button></li></ul></div></div><button type="button" class="usa-button usa-modal__close" aria-label="Close this window" data-close-modal><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="#svg-close"></use></svg></button></div></div>`;
  });

  // If BASEURL env variable exists, update pathPrefix to the BASEURL
  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL
  }

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    // Pre-process *.md files with: (default: `liquid`)
    // Other template engines are available
    // See https://www.11ty.dev/docs/languages/ for other engines.
    markdownTemplateEngine: 'liquid',

    // Pre-process *.html files with: (default: `liquid`)
    // Other template engines are available
    // See https://www.11ty.dev/docs/languages/ for other engines.
    htmlTemplateEngine: 'liquid',

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: pathPrefix,
    // -----------------------------------------------------------------

    // These are all optional (defaults are shown):
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  };
};
