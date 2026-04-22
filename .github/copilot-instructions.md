# Copilot instructions for `cisagov/get.gov`

## Project overview
- This repo is the static site for https://get.gov, built with **Eleventy (11ty)** and **USWDS**.
- Main content lives in Markdown under `/pages` and `/posts`.
- Layouts/components live in `/_includes` and site data files are in `/_data`.

## Tech stack and important files
- Node.js project using npm scripts (`package.json`).
- Eleventy config: `/eleventy.config.mjs`.
- Asset pipeline: `/config/buildAssets.js` builds hashed CSS/JS into `/_site/assets` and writes `/_data/assetPaths.json`.
- Primary style entrypoint: `/styles/styles.scss`.
- Primary JS entrypoints: `/js/app.js` and `/js/admin.js`.

## High-value commands
Run from repository root:
- Install deps: `npm install`
- Build site: `npm run build`
- Local dev server + asset watcher: `npm run dev`
- Accessibility regression checks (CI-aligned): `npm run pa11y`

## Validation guidance
- For most changes, run `npm run build` at minimum.
- For user-facing/content/template changes, also run `npm run pa11y`.
- GitHub Actions test workflow (`.github/workflows/test.yml`) uses the pa11y command above.

## Content and navigation conventions
- New pages/posts are Markdown files with front matter.
- Use `layout`, `permalink`, `title`, and appropriate `tags`.
- Side navigation is controlled by `eleventyNavigation` metadata.
- For internal links, prefer Eleventy URL filter patterns already used in templates.

## Errors encountered in onboarding and workarounds
1. **`npm test` fails by default** with:
   - `Error: no test specified`
   - Workaround: do not use `npm test` for validation in this repo; use `npm run build` and `npm run pa11y`.
2. **`npm run build` emits many Sass deprecation warnings** from upstream USWDS/Sass dependencies.
   - Workaround: treat these as non-blocking warnings unless the build exits non-zero.
