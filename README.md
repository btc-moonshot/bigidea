# A Feeless Settlement Lattice for Bitcoin

A single-page static site (Astro) that publishes a moonshot response to Spiral's
"The long road to bitcoin payments". Live at <https://btc-moonshot.github.io/bigidea/>.

## Layout

| Path | What it is |
|---|---|
| `src/pages/index.astro` | The article, table of contents, sources and call to action |
| `src/components/LedgerDiagram.astro` | The three-ledger diagram, generated as inline SVG (wide and phone layouts) |
| `src/components/A.astro` | External link that opens in a new tab |
| `src/layouts/Base.astro` | `<head>`: meta, Open Graph and Twitter card tags, theme bootstrap |
| `src/styles/global.css` | Colour tokens (light/dark) and base typography |
| `public/og.png` | 1200×630 link-preview image |
| `.github/workflows/deploy.yml` | Builds and deploys to GitHub Pages on every push to `main` |

## Develop

Commands run inside the `nodebox` container:

```bash
nodebox npm ci
```

```bash
nodebox -p 4321 npm run dev
```

```bash
nodebox npm run build
```

## Deploy

Pushing to `main` runs the Pages workflow. One-time setup: in the repo's
**Settings → Pages**, set **Source** to **GitHub Actions**. GitHub Pages on the
Free plan needs the repository to be public.

The site is served from the `/bigidea` sub-path, set in `astro.config.mjs`
(`site` and `base`). If you move to a custom domain, update `site` and remove `base`.
