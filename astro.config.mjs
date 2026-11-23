// @ts-check
import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages as a project site: https://btc-moonshot.github.io/bigidea/
// If you move to a custom domain, set `site` to that domain and remove `base`.
export default defineConfig({
  site: 'https://btc-moonshot.github.io',
  base: '/bigidea',
  trailingSlash: 'ignore',
});
