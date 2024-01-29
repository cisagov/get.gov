# Get.gov Home

This is the 11ty Cloud.gov Pages static site generator for the homepage and help content for .gov. The code for the .gov registrar is at [cisagov/getgov](https://github.com/cisagov/getgov).

## About the 11ty template

This is built using an [11ty](https://www.11ty.dev/) static site generator (SSG) template with [U.S. Web Design System v 3.0 (USWDS)](https://designsystem.digital.gov/) and is run as a Cloud.gov Pages website.

The template this is built on strives to be compliant with requirements set by [21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/). The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires agencies to ensure that legacy websites are regularly reviewed, removed, and consolidated);
- has a search function;
- uses an industry standard secure connection;
- “is designed around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continually test the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;”
- allows for user customization; and
- is mobile-friendly.

For more about the template and it's functionality see [here](https://github.com/cloud-gov/pages-uswds-11ty).

## Getting Started

### Installing Dependencies

`npm install`

### Running a Dev Instance

`npm run dev`

#### Clean and run

If you are having issues with assets being locally cached/not updating:

`npm run clean && npm run dev`

### Run Pa11y

`npm run pa11y`

## Adding new content and front matter
You can create new pages by creating a new markdown file (.md) and adding “front matter” to the top of the markdown file. The front matter section starts and ends with three hyphens (---). It consists of key-value pairs that define some meta-data and options for the page. 
You should set the following front matter on all pages.

### Title
`title:` 
The title of the page will be displayed as an H1 tag on the page.

*Example*: `title: Before you request a .gov domain`

### Permalink
`permalink:`
Determines the portion of the url that will follow `www.get.gov/`  

*Example*: `permalinks: /domains/benefits/` means this page will be found at `www.get.gov/domains/benefits/`

### Layout
`layout: `
Sets the layout this page will use. All layouts are stored in the `/layouts/` folder, and the value for layout should include a reference to that folder.

*Example*: `layout: layouts/info-page` 

The following layouts have been customized for get.gov.

#### landing
`layout: layouts/landing`

Landing pages that serve as an index to other pages use the `landing` layout. 

#### info-page
`layout: layouts/info-page`

Pages within a collection that focus on presenting information about a particular topic use the `info-page` layout. 

#### post
`layout: layouts/post`

Blog posts use the `post` layout.

### Excerpt
`excerpt:` 
Sets the short description about this page or post that will be displayed on the landing page. This meta-data isn’t necessary on landing pages, but is required on detailed information pages and blog posts. 

*Example*: `excerpt: Follow these steps to complete your request as quickly as possible`

### Tags
`tags:` 
Determines which “collection” this page or post belongs to. Pages within the same collection will be listed on the collection’s landing page, as well as in the sidenav. All blog posts use the `post` tag, which is listed first. Additional tags for a blog post will be displayed as a “topic” tag that represents the topic this and related posts cover. 

*Example for an info page*: `tags: domains` 

*Example for a blog post*: `tags: post topic1 topic2`

### Eleventy navigation
`eleventyNavigation:` 

This sets options for the `eleventyNavigation` plugin which is used for organizing the sidenav. The value for this key is a set of additional (child) key-value pairs

#### Eleventy Navigation-key
 `key:` 

Determines which collection this page should be grouped with in the navigation

#### Eleventy Navigation-order
 `order:` 

Determines in which order position this page should be displayed on the landing page and in the sidenav. The order is ascending. A page with `order: 2` is listed before a page with order `order: 9`. 

#### Eleventy Navigation-title
`title`: 

Determines the title of the page in the sidenav. While typically this would be exactly the same as the page title, it allows for flexibility to display shorter names in the sidenav.

*Example*: 
```
eleventyNavigation:
  key: domains
  order: 2
  title: Before you request a .gov domain
```
- - -

In addition, there are front matter options that are used on some but not all pages, in accordance with the design of the page. For all front matter that provides a binary option, if you don’t want to use the option (i.e. you don’t want it to set the value to `true`), you can either set it to `false` or simply omit this piece of front matter. 

### Sidenav

`sidenav:`
Determines if a left-hand side navigation will be included on the page. This navigation will include all pages that are within the same collection (i.e. share the same tag).

### Outlined links

`outlined_links:` 
Provides a binary option to wrap the links on the landing page in an outline. This style is currently used for the “Domains” page.

### Hide search in navigation

`hide_nav_search`
Provides a binary option to hide the search bar in the navigation. This is used on pages that have a large search box, such as the help page and the search results. 

*Example*: `hide_nav_search: true`

### Searchbox
`searchbox`: 
Provides a binary option to display a large search box in the page’s heading below the title.  Currently used on the help landing page. Note that if you include the search box on the page, you likely want to set `hide_nav_search: true`. 

*Example*: `searchbox: true`

## How To

### Creating links

For preview links generated on the platform, we automatically set the `pathPrefix` in the [`.eleventy.js`](/.eleventy.js) file base on the `BASEURL` environment variable. We use the built-in 11ty filter for `url` to properly append the prefix path for the linked page.  When adding new links, use the following syntax:

```liquid
<a href="{{ '/myDir/' | url }}">Link to My Dir</a>
```

See the [11ty docs](https://www.11ty.dev/docs/filters/url/)

### Referencing Images

All of your images will be stored in the `_img/` directory. To reference your images in your templates you can use the `shortcodes` built into the template.

For referencing an image without a style class, you will pass the template shortcode the image's source path and the alternative image name in that order. ie:

```
{% image "_img/my-image.png" "My PNG Image Alternative Name" %}
```

For referencing an image with a style class, you will pass the template shortcode the image's source path, class names, and the alternative image name in that order. ie:

```
{% image_with_class "_img/my-image.png" "img-class another-class" "My PNG Image Alternative Name" %}
```

### Referencing USWDS Sprite Icons

USWDS has sprite icons available for use. Here is the [list of icons](https://designsystem.digital.gov/components/icon/) available when using the sprite shortcode `uswds_icon` in the template. The following example is how you can reference the icon in a template.

```
{% uswds_icon "<USWDS sprite name>" %}
```

### Expanding SCSS Styles

CSS and SASS can be added or imported into the `styles/styles.scss`. You can also use [USWDS Design Tokens](https://designsystem.digital.gov/design-tokens/) in the `styles/themes` files to update colors, fonts, and layout to fit your site's branding. This template uses [esbuild](https://esbuild.github.io/)and [autoprefixer](https://github.com/postcss/autoprefixer) to bundle your SASS/CSS and fingerprint the files in the site build.

### Adding custom Javascript

Javascript can be added to the admin UI or site UI by adding or importing code into the `js/admin.js` or `js/app.js` files respectively. This template uses [esbuild](https://esbuild.github.io/) to bundle your javascript and fingerprint the files in the site build.

### Managing environment variables

Environment variables are set and managed on [pages.cloud.gov](https://pages.cloud.gov/)

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
