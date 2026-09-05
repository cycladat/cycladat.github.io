# Maintaining the legal pages

The privacy policy, terms of service, cookie policy and EULA live as markdown
in `src/content/docs/` (`privacy.md`, `terms.md`, `cookies.md`, `eula.md`).
They started life as Termly exports, but since September 2026 the markdown is
the source of truth. Termly is not.

## Editing

- Edit the markdown directly. Keep the URLs: the app's settings screen and
  the paywall link to `/privacy/`, `/terms/`, `/cookies/` and `/eula/`, and
  App Store Connect's licence agreement field points at the EULA.
- Update the `_Last updated ..._` line near the top of the page you changed.
  Keep the trailing full stop; the markdown linter treats a bare italic line
  as a fake heading.
- The in-page table of contents in the privacy policy and the terms links to
  heading slugs. If you rename a heading, the build fails on the stale link
  (the links validator runs in CI), so rename the link too.
- `pnpm verify` runs the same lint, typecheck and build as CI.

## The converter

`scripts/termly-to-md.mjs` is the one-off that produced the markdown from
the Termly HTML. It is kept for reference and for the unlikely case of a
brand-new Termly export. Do not re-run it over an existing page: it will
throw away every hand edit made since.

If you do generate a fresh page from Termly, run `pnpm lint:fix` afterwards
(it cleans up list markers and trailing spaces the converter leaves) and
diff against the previous version before committing.

## Who

Brian owns these. Legal wording changes should be deliberate, dated, and
reflected in the app where the app restates them (the paywall's
auto-renewal note, the FAQ on the landing page).
