# Reflections Family Moods Board App

[![Live site](https://img.shields.io/website?url=https%3A%2F%2Fsoliv1.github.io%2Fmoodsboard-reflections-family%2F&label=live%20site)](https://soliv1.github.io/moodsboard-reflections-family/)
[![Deploy to GitHub Pages](https://github.com/SOliv1/moodsboard-reflections-family/actions/workflows/deploy.yml/badge.svg)](https://github.com/SOliv1/moodsboard-reflections-family/actions/workflows/deploy.yml)
[![PWA ready](https://img.shields.io/badge/PWA-ready-2ea44f?labelColor=1f6f3b&color=2ea44f)](https://soliv1.github.io/moodsboard-reflections-family/)
[![Orb palette](https://img.shields.io/badge/orb-palette-95cdee?labelColor=517ba6&color=95cdee)](https://soliv1.github.io/moodsboard-reflections-family/)

React + Vite starter for a seasonal and cinematic mood board.

Live site:

```text
https://soliv1.github.io/moodsboard-reflections-family/
```

## Run locally

```bash
npm install
npm run dev
```

## PWA assets

The mobile install icons and Apple startup images are generated from the orb logo source in `public/impressionist-orb-identity-upscaled.png`.

```bash
npm run generate:pwa-assets
```

Generated files are written to:

```text
public/pwa/
public/pwa/apple-splash/
```

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` runs the PWA asset generator first, then creates the production bundle, manifest, and service worker.

## Deploy

Pushes to `master` trigger the GitHub Pages workflow in `.github/workflows/deploy.yml`.

```bash
git push origin master
```

## Moodboard Export

The palette export is kept as a developer tool for reusing the curated colours across the Reflections apps.

```bash
npm run export:moodboard
```

This writes the portable palette snapshot to:

```text
moodboard.export.json
```

The export script lives at:

```text
scripts/exportMoodboard.js
```

## Notes

- Legacy static files remain in place (`css/`, `js/`, `index2.html`) for reference.
- Main app entry is `src/App.jsx`.
