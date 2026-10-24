# Rumki & Manomoy — Wedding Invitation

A single-page animated wedding invitation built with React, Vite, and Tailwind CSS.

## Project structure

```
wedding-invitation/
├── public/
│   ├── images/          ← all site images live here
│   └── audio/           ← put your music file here (see below)
├── src/
│   ├── WeddingInvitation.jsx   ← the entire site (one component)
│   ├── main.jsx                ← React entry point
│   └── index.css               ← Tailwind imports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/` — deployable to Vercel, Netlify, GitHub Pages, or any static host.

## Adding background music

Drop an mp3 into `public/audio/`, then open `src/WeddingInvitation.jsx` and set:

```js
const AUDIO_SRC = "/audio/your-file.mp3";
```

## Swapping images

Replace any file in `public/images/` with the same filename, or add new files and update the matching `IMG_...` constant near the top of `WeddingInvitation.jsx`.

## WhatsApp number

The RSVP and guestbook both send messages to a WhatsApp number hardcoded in `WeddingInvitation.jsx` (search for `wa.me/`). Update it there if it changes.
