# Reflections Family Moods Board App

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
