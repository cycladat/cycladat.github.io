# <www.cycladat.com>

Astro + Starlight site for cycladat, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

- `src/pages/index.astro`: the landing page. Plain HTML (Bootstrap 5 + the Kit
  early-access form), untouched by Starlight.
- `src/content/docs/`: everything Starlight renders. The legal documents live at
  the top level so their URLs stay `/privacy/`, `/terms/`, `/cookies/`, `/eula/`
  (the app's settings screen links to them).
- `public/`: static assets served as-is (`assets/`, the store-reviewer sample
  ride under `testing/`, and the `CNAME`).
- `scripts/termly-to-md.mjs`: the one-off converter that turned the Termly HTML
  exports into markdown. The markdown is now the source of truth; edit it directly.

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static output in dist/
pnpm preview
```
