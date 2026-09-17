# Claudia — Diciotto

Single-page birthday website for Claudia’s 18th birthday, built with React, Vite, Tailwind CSS and Framer Motion.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Validation

```bash
pnpm check
pnpm build:web
```

`pnpm build:web` creates the static Vite output in `dist/public`.

## Deploy to Vercel

Import the GitHub repository into Vercel. The included `vercel.json` already configures:

- Framework: Vite
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build:web`
- Output directory: `dist/public`
- SPA fallback to `index.html`

No environment variables are required for the rose assets: they are stored locally in `client/public/roses/` as self-contained SVG files.

## Deploy from the Vercel CLI

```bash
pnpm dlx vercel
pnpm dlx vercel --prod
```

When prompted, use the repository root as the project directory. The existing `vercel.json` supplies the build settings.

## Project notes

The `server/` directory and the `pnpm build` script are retained for the local full-template runtime. Vercel uses the static-only `pnpm build:web` script and does not need the Express server.
