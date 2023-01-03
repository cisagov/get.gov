# 11ty-uswds-template

## Why this project

This is an [11ty](https://www.11ty.dev/) static site generator (SSG) template using [U.S. Web Design System v 3.0 (USWDS)](https://designsystem.digital.gov/) and is focused on providing developers a starter template and reference implementation for Federalist/Cloud.gov Pages websites.

This project strives to be compliant with requirements set by [21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/). The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires agencies to ensure that legacy websites are regularly reviewed, removed, and consolidated);
- has a search function;
- uses an industry standard secure connection;
- “is designed around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continually test the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;”
- allows for user customization; and
- is mobile-friendly.

## Key Functionality
This repository contains the following examples and functionality:

✅  Publish blog posts, press releases, announcements, etc. To modify this code, check out `blog/index.html`, which manages how the posts are listed. You should then check out `_includes/layouts/post.html` to see how individual posts are structured.

✅ Publish single one-off pages. Instead of creating lots of folders throughout the root directory, you should put single pages in `pages` folder and change the `permalink` at the top of each page. Use sub-folders only when you really need to.

✅  There are two different kinds of `pages`, one does not have a side bar navigation, and the other uses `_includes/sidenav.html`. You can enable this option by adding `sidenav: true` to your page front matter.

```
---
title: Document with Sidenav
layout: layout/page
sidenav: true
permalink: /document-with-sidenav
---
```

✅ [Search.gov](https://search.gov) integration - Once you have registered and configured Search.gov for your site by following [these instructions](https://federalist.18f.gov/documentation/search/), add your "affiliate" and "access key" to `_data/site.yml`. Ex.

```
searchgov:

  # You should not change this.
  endpoint: https://search.usa.gov

  # replace this with your search.gov account
  affiliate: federalist-uswds-example

  # replace with your access key
  access_key: xX1gtb2RcnLbIYkHAcB6IaTRr4ZfN-p16ofcyUebeko=

  # this renders the results within the page instead of sending to user to search.gov
  inline: true
```

The logic for using Search.gov can be found in `_includes/searchgov/form.html` and supports displaying the results inline or sending the user to Search.gov the view the results. This setting defaults to "inline" but can be changed by setting
```
searchgov:
  inline: false
```
in `_data/site.yml`.

✅ [Digital Analytics Program (DAP)](https://digital.gov/services/dap/) integration - Once you have registered your site with DAP add your "agency" and optionally, `subagency` to `_data/site.yml` and uncomment the appropriate lines. Ex.

```
dap:
  # agency: your-agency

  # Optional
  # subagency: your-subagency
```

✅ [Google Analytics](https://analytics.google.com/analytics/web/) integration - If you have a Google Analytics account to use, add your "ua" to `_data/site.yml` and uncomment the appropriate lines. Ex.

```
ga:
  # ua: your-ua
```

## Getting Started

### Installing Dependencies

`npm install`

TODO

### Running a Dev Instance

`npm run dev`

TODO

## Netlify CMS



### Config

The Netlify CMS can be configured in [`/admin/config.yml`](./admin/config.yml) and you will update the
`repo` key to be your Github organization and repository name.

```yml
backend:
  name: github
  repo: <your-github-org>/<your-repository-name>
  base_url: https://federalistapp.18f.gov
  auth_endpoint: external/auth/github
  preview_context: federalist/build
  branch: master
  use_graphql: true
```

### Running Locally

You can run the Netlify CMS locally to more easily customize and troubleshoot the CMS to you content.
We provide comments in the [`/admin/config.yml`](./admin/config.yml) instructing you how to change the `backend` values from your production site to the local development.

> *Note: Make sure to not commit and push the config with the `backend` set for local develop to Github or
else you will break your production site's Netlify CMS.

```yml
# Local development backend
backend:
  name: git-gateway
local_backend: true
```

Once you [`/admin/config.yml`](./admin/config.yml) is set to local development, you run `npm run dev:cms` to
serve as a development authentication server.

## How To

### Adding Collections

TODO

### Adding Static Data

TODO

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

### Customizing 11ty

TODO

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
