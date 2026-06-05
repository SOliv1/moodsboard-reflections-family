# Reflections Family Moods Board App

React + Vite starter for a seasonal and cinematic mood board.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
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
