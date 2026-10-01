# Research Consultancy

The public Research Consultancy website, built as a static Astro site with React components and Tailwind CSS. It presents the research training courses, Match Mentorship program, mentors, publication results, and contact information.

## Develop locally

Requirements: Node.js 22.12 or later and npm.

```sh
npm ci
npm run dev -- --background
```

The local site is available at `http://localhost:4321/`. Manage the background server with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

To build and preview the static site locally:

```sh
npm run build
npm run preview
```

Run the linter with `npm run lint`.

## Site structure

- `src/pages/` contains the home, course, Match Mentorship, mentors, results, about, contact, and 404 pages.
- `src/components/` contains shared site, journal-style content, and figure components.
- `src/data/` holds course, people, research, and site-wide content.
- `src/assets/photos/` contains source photography processed by Astro during the build.
- `public/` contains static logos and favicons.
- `docs/rc-research.md` records source notes for the site’s research content.

## Deploy

Cloudflare Workers Builds deploys the site when code is pushed to `main`: it runs `npm run build`, then `npx wrangler deploy`, which publishes `dist/` as static assets using `wrangler.jsonc`. Pushes to other branches get preview deployments. The published site is:

<https://research-consultancy.com/>

The site is fully static. Add the `@astrojs/cloudflare` adapter only when a route needs server rendering.
