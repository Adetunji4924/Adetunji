# Adétúnjí: personal website

The personal site of **Adetunji Adewole**: Technology Leader, Systems Architect, Product Builder.

Built with **Astro 7** (static output), **TypeScript** (strictest), **Tailwind CSS 4** and **MDX**, and deployed on **Cloudflare Workers** (static assets, plus one small Worker for the contact form). No client framework is shipped. The JavaScript is a handful of small scripts: the theme toggle, nav labels, scroll reveals, the rotating hero title, the work filters, the dot-field tiles and the contact form. Every animation respects `prefers-reduced-motion`, and everything works without JavaScript.

## Run it locally

Requires Node **22.23.4 or newer** (pinned in `.nvmrc`).

```bash
nvm use            # or install Node 22.23.5
npm install
npm run dev        # http://localhost:4321
npm run build      # type-checks (astro check), then builds to dist/
npm run preview    # serves dist/
```

## Where things live

| What | Where |
|---|---|
| Name, descriptor, email, nav, social links | `src/config/site.ts` |
| Design tokens: palette, light/dark themes, type scale, motion | `src/styles/global.css` (`@theme`, `.dark`, `.on-dark`) |
| Logo (source files) | `public/logos/` |
| Logo (cleaned, recolourable SVGs used by the site) | `src/assets/brand/`, rendered by `src/components/ui/Logo.astro` |
| Homepage sections | `src/components/home/` |
| Capabilities (homepage graph + About) | `src/data/capabilities.ts` |
| Case studies and archive projects | `src/content/work/*.mdx` |
| Articles | `src/content/writing/*.mdx` (copy `_template.mdx`) |
| Career timeline | `src/content/experience/timeline.json` |
| Principles (homepage + About) | `src/data/principles.ts` |
| Content schemas | `src/content.config.ts` |
| SEO, Open Graph, JSON-LD | `src/components/layout/Seo.astro`, `src/lib/schema.ts` |
| Redirects and security headers | `public/_redirects`, `public/_headers` |
| Cloudflare config | `wrangler.jsonc` |
| Contact form endpoint (`/api/contact`) | `worker/index.ts` |

### Publishing content

- **Projects:** `tier: case-study` gets a page at `/work/<file-name>`. `tier: archive` is listed on `/work` only. `featured: true` puts it on the homepage.
- **Drafts:** `draft: true` keeps an entry out of every page, list and the sitemap. Files starting with `_` are ignored entirely.
- **Articles:** they are drafts by default. Set `draft: false` and the real publication date when one is ready.
- **Private notes:** write notes to yourself inside MDX as `{/* … */}`. They are stripped from the output. `CONFIRM:` notes mark facts that still need checking.

## Before launch: facts to confirm

These are kept out of the site or worded conservatively until confirmed:

- [x] `adewoleadetunji77@gmail.com` is the public email (confirmed).
- [x] The commission and payout platform must **not** be named publicly (confirmed). It appears anonymised; keep the name, clients and screenshots off the site.
- [ ] **Vehtriq:** which capabilities are implemented today, and which are planned.
- [ ] **Equalsphere:** a public description of the problem and audience, and its current stage.
- [ ] **Africa AI Hub / WAAII** and the **pension integration programme:** role, public status and permission. These are not on the site yet.
- [ ] Dates for the timeline stages, where you want them shown.
- [ ] A custom domain (being bought). Then: set `SITE_URL`, onboard it to Email Sending, set `CONTACT_FROM` (see Deployment).
- [x] Logo supplied and in use (header, footer, favicon, touch icon, social image).
- [ ] Optional: portrait photography.

## Design notes

- **Palette:** Acid Yellow `#F0F000`, Near Black `#111111`, Off White `#F8F8F8`, Light Grey `#E0E0E0`. Yellow is never used as text on a light background.
- **Type:** Inter (variable, OFL) for everything.
- **Themes:** light by default, or follows the visitor's system setting; the toggle remembers the choice. Panels marked `.on-dark` stay dark in both themes.
- **Layout and motion** take their cues from a reference portfolio (floating frosted nav, rotating title, showcase cards, dot fields, capability graph, giant footer wordmark). The code, copy and visuals here are original; nothing from the reference site is copied.

## Deployment (Cloudflare Workers)

Nothing deploys automatically from this repository yet. Production is still the old site until the switch is approved.

**Local check in the real Cloudflare runtime:** `npm run preview` builds, then serves the site with `wrangler dev` at http://localhost:8787. The contact form's email is simulated locally: nothing is sent, and Wrangler prints where it saved the message.

**First deploy**

1. In the Cloudflare dashboard: Workers & Pages → Create → Import a repository → pick this repo and branch. Cloudflare reads `wrangler.jsonc`.
   - Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
   - The Worker name (`adetunji` in `wrangler.jsonc`) becomes the address: `adetunji.<your-account-subdomain>.workers.dev`. Set the account subdomain once under Workers & Pages → your subdomain.
2. Add a build variable `SITE_URL` = that workers.dev address. The build refuses to run on Cloudflare without it, so links never point at localhost.
3. Node: Cloudflare's build image reads `.nvmrc` (22.23.5).

**When the domain is bought**

1. Add the domain to Cloudflare (or buy it there), then attach it to the Worker: Worker → Settings → Domains & Routes → Add custom domain.
2. Change the `SITE_URL` build variable to `https://yourdomain.com` and redeploy.
3. Switch the contact form on:
   - Onboard the domain for sending: `npx wrangler email sending enable yourdomain.com` (or Email Service in the dashboard). This adds the SPF/DKIM records.
   - Verify `adewoleadetunji77@gmail.com` as a destination address if Cloudflare asks (Email Routing → Destination addresses).
   - Set `CONTACT_FROM` in `wrangler.jsonc` to an address on the domain, e.g. `website@yourdomain.com`, and deploy.
   - Send a real test message from the live site and confirm it arrives. Until `CONTACT_FROM` is set, the form tells visitors it isn't switched on and shows the email address instead.

**How the form works:** `POST /api/contact` runs `worker/index.ts`; every other path is served straight from `dist/`. The `send_email` binding is locked to one destination (your Gmail), so the form cannot be used to email anyone else. Bots are filtered by a hidden honeypot field and a same-origin check. If spam becomes a problem, Cloudflare Turnstile can be added.

After changing `wrangler.jsonc` bindings or vars, run `npm run cf-typegen` to refresh `worker-configuration.d.ts`.

## Search (SEO)

### What the code already does

- **Titles and descriptions:** every page has its own, kept short enough to show in full in a search result. Each one names Adetunji Adewole.
- **Structured data:** every page carries one linked schema.org graph: `WebSite`, `Person` (with name variants such as Adewole Adetunji, Adewole Muhammed and Adétúnjí), and the ventures Vehtriq and Equalsphere. Pages add their own node on top: `ProfilePage`, `CollectionPage`, `ContactPage`, `CreativeWork` or `Article`, plus a `BreadcrumbList`. All of it lives in `src/lib/schema.ts`.
- **Visible name:** the full name appears on the page in the hero and the footer, not only in hidden text.
- **`/sitemap-index.xml` and `/robots.txt`:** open to all crawlers, AI search engines included. `/api/` is excluded.
- **`/llms.txt`:** a plain-text summary for ChatGPT, Perplexity, Claude and similar tools. It is built from the same content as the pages, so it stays current.
- **Canonical URLs, Open Graph and Twitter cards,** and `rel="me"` on every social link.

### After the domain is live (one-off, about 30 minutes)

1. **Google Search Console:** add a *Domain* property, then verify it with the TXT record Cloudflare DNS can add for you. Submit `https://<domain>/sitemap-index.xml`, then use *URL inspection → Request indexing* on the home and About pages.
2. **Bing Webmaster Tools:** import the site from Search Console. Bing also powers ChatGPT search and Copilot.
3. **Cloudflare dashboard:**
   - Turn **Crawler Hints** on. It pings Bing and other engines (through IndexNow) whenever pages change.
   - Under **AI Crawl Control**, do *not* block AI search crawlers, and leave the *managed robots.txt* off. Otherwise AI assistants can't cite the site.
4. **Point every profile at the site.** Links from your own profiles tell Google these accounts and the site belong to the same person:
   - LinkedIn: website field and Featured section.
   - GitHub: profile website, plus a profile README.
   - X, Instagram and Dribbble: bio links.
5. **Use one name everywhere.** The site uses *Adetunji Adewole*, while LinkedIn shows *Adewole Muhammed*. Adding "Adetunji" to the LinkedIn name, or at least the headline, ties the two together.
6. **Add a real headshot.** Save it as `src/assets/portrait.jpg` and add it as the `Person` `image`. Google prefers a photo for people results and knowledge panels.

### What moves rankings after that

- **Writing.** Every essay is a new page that can rank for a topic you work on, such as fleet fuel costs, Cloudflare Workers architecture or leading engineering teams. This is the biggest lever left.
- **Mentions elsewhere.** Talks, guest posts, podcast appearances, and team pages at Greenleaf Africa, Vehtriq and Equalsphere that link back here.
- **Patience.** A new domain usually takes a few weeks to rank for a name, and longer for competitive topics. No one can guarantee a ranking.
