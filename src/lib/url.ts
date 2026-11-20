/**
 * Clean, canonical page URL. Builds use `format: 'file'` (about.html), so
 * Astro.url includes `.html` at build time; the host serves clean paths.
 */
export function canonicalUrl(url: URL, site: URL | undefined) {
  const path = url.pathname.replace(/\.html$/, '').replace(/\/index$/, '/').replace(/(.)\/$/, '$1') || '/';
  return new URL(path, site);
}
