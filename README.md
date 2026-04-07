# NDMDs website

Static website for **NDMDs — Neurodiversity in Medicine Society** (University of Melbourne MD program), a UMMSS-affiliated student club for neurodiverse and neurodivergent medical students.

## Tech stack

- **[Astro](https://astro.build/)** 4.x — static site generation (`output: "static"`)
- **[Tailwind CSS](https://tailwindcss.com/)** 3.x — styling via `@astrojs/tailwind`
- **TypeScript** — strict project references for `.astro` and any future `.ts` files

No React/Vue/Svelte; pages are `.astro` components with semantic HTML and accessible patterns (skip link, landmarks, focus styles).

## Requirements

- **Node.js** ≥ 18.17 (Astro 4). The repo includes [`.nvmrc`](./.nvmrc) with **20** for local development and hosts (e.g. Cloudflare Pages) that read it.

## Getting started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (default [http://localhost:4321](http://localhost:4321)).

| Command           | Purpose                                      |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Local dev server with hot reload             |
| `npm run build`   | Production build → `dist/`                   |
| `npm run preview` | Serve `dist/` locally to verify the build   |

## Project layout

```text
src/
  components/     SiteHeader (nav + About dropdown), SiteFooter
  layouts/        BaseLayout (HTML shell), PageLayout (header + main + footer)
  pages/
    index.astro           Home
    about/
      index.astro         About overview (vision, values, who we are)
      neurodiversity.astro
      mythbusting.astro
      you-define-yourself.astro
    events.astro
    resources.astro
    contact.astro
    404.astro
  styles/global.css       Tailwind layers + myth/nav details tweaks
public/               Static assets (logo, `/images/` infographics)
```

Brand colours live in [`tailwind.config.mjs`](./tailwind.config.mjs) under `theme.extend.colors.brand`.

## Deployment

Build output is **`dist/`**. Configure your host to run `npm run build` and publish `dist/`.

**Cloudflare Pages (example):**

- Build command: `npm run build`
- Build output directory: `dist`
- Environment: Node 20 (or match `.nvmrc`)

Uncomment and set `site` in [`astro.config.mjs`](./astro.config.mjs) to your production URL so canonical links resolve correctly.

## Content and configuration

- **Contact:** [`src/pages/contact.astro`](src/pages/contact.astro) — Facebook group/page URLs, email, optional member signup form URLs (`ndMemberSignupUrl`, `associateMemberSignupUrl`).
- **Resources:** External links in [`src/pages/resources.astro`](src/pages/resources.astro) may need periodic checks.
- **Events:** Copy and dates in [`src/pages/events.astro`](src/pages/events.astro) are maintained by hand (no CMS).

## Licence

Content reflects the society’s public materials; code is for NDMDs site maintenance unless otherwise noted.
