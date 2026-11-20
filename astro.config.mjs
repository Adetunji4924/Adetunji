// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The public address. Canonical URLs, the sitemap, robots.txt and social previews all
// derive from it. Set SITE_URL in the Cloudflare build settings (the workers.dev
// address now, the custom domain once it's bought). A CI build without it fails,
// rather than publishing links that point at localhost.
const SITE_URL = process.env.SITE_URL ?? (process.env.CI || process.env.WORKERS_CI ? undefined : 'http://localhost:4321');
if (!SITE_URL) throw new Error('SITE_URL is not set. Add it to the Cloudflare build variables.');

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/contact/thanks') && !page.includes('/contact/error'),
    }),
  ],
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },
  security: {
    // Hashes every inline script/style into a per-page CSP <meta> tag.
    csp: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
