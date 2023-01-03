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

### Running Netlify Locally

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

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
