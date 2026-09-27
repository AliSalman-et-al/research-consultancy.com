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

GitHub Actions builds and deploys the site to GitHub Pages when code is pushed to `main`. The workflow can also be started manually from the Actions tab. The published site is:

<https://alisalman-et-al.github.io/research-consultancy.com/>

The deployment build applies the repository path required by GitHub Pages. Local builds and previews use the root path.
