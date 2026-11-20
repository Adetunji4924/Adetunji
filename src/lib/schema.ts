import { site, socials } from '@/config/site';
import { capabilities } from '@/data/capabilities';

/**
 * schema.org structured data. Only facts the owner has supplied or that appear on
 * the site. Everything is linked by @id so search engines read one identity:
 * the website, the person behind it, and the ventures they founded.
 */

type Base = URL | undefined;
const id = (base: Base, hash: string, path = '/') => new URL(`${path}#${hash}`, base).href;

/** Name variants people actually search for. All derive from the owner's legal name. */
const nameVariants = [site.brand, site.legalName, 'Adewole Adetunji', 'Adewole Muhammed', 'Adetunji Muhammed Adewole'];

const skills = [
  ...capabilities.flatMap((c) => c.items),
  'Artificial intelligence',
  'Cloudflare Workers',
  'Software architecture',
  'Fleet management software',
];

/** Sitewide identity graph, emitted on every page. */
export function identityGraph(base: Base) {
  const person = id(base, 'person');
  return [
    {
      '@type': 'WebSite',
      '@id': id(base, 'website'),
      url: new URL('/', base).href,
      name: site.name,
      alternateName: [site.brand, `${site.name} portfolio`],
      description: site.description,
      inLanguage: 'en',
      publisher: { '@id': person },
      author: { '@id': person },
    },
    {
      '@type': 'Person',
      '@id': person,
      name: site.name,
      givenName: 'Adetunji',
      additionalName: 'Muhammed',
      familyName: 'Adewole',
      alternateName: nameVariants,
      url: new URL('/', base).href,
      email: `mailto:${site.email}`,
      description: site.description,
      jobTitle: ['Head of IT', 'Technology Leader', 'Systems Architect', 'Product Builder'],
      worksFor: { '@type': 'Organization', name: 'Greenleaf Africa' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Ilorin' },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'B.Sc. (Ed.) Mathematics',
        recognizedBy: { '@type': 'CollegeOrUniversity', name: 'University of Ilorin' },
      },
      knowsAbout: [...new Set(skills)],
      sameAs: socials.map((s) => s.href),
    },
    {
      '@type': 'Organization',
      '@id': id(base, 'vehtriq'),
      name: 'Vehtriq',
      description: 'AI-powered fleet intelligence for small and medium-sized fleet operators. In development.',
      url: new URL('/work/vehtriq', base).href,
      founder: { '@id': person },
    },
    {
      '@type': 'Organization',
      '@id': id(base, 'equalsphere'),
      name: 'Equalsphere',
      description: 'A workforce inclusion platform. In development.',
      url: new URL('/work/equalsphere', base).href,
      founder: { '@id': person },
    },
  ];
}

/** Home and About are profile pages about the person (Google's recommended type). */
export function profilePageSchema(opts: { url: URL; base: Base; name: string; description: string }) {
  return {
    '@type': 'ProfilePage',
    '@id': `${opts.url.href}#page`,
    url: opts.url.href,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': id(opts.base, 'website') },
    mainEntity: { '@id': id(opts.base, 'person') },
    about: { '@id': id(opts.base, 'person') },
  };
}

export function webPageSchema(opts: { url: URL; base: Base; name: string; description: string; type?: string }) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${opts.url.href}#page`,
    url: opts.url.href,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': id(opts.base, 'website') },
    author: { '@id': id(opts.base, 'person') },
  };
}

/** Breadcrumb trail. Home is added automatically. */
export function breadcrumbSchema(base: Base, trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: new URL(t.path, base).href,
    })),
  };
}

export function creativeWorkSchema(opts: {
  title: string;
  description: string;
  url: URL;
  base: Base;
  keywords?: string[];
}) {
  return {
    '@type': 'CreativeWork',
    '@id': `${opts.url.href}#work`,
    name: opts.title,
    headline: `${opts.title}: case study`,
    description: opts.description,
    url: opts.url.href,
    ...(opts.keywords?.length ? { keywords: opts.keywords.join(', ') } : {}),
    creator: { '@id': id(opts.base, 'person') },
    author: { '@id': id(opts.base, 'person') },
    isPartOf: { '@id': id(opts.base, 'website') },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: URL;
  base: Base;
  published: Date;
  modified?: Date | undefined;
}) {
  return {
    '@type': 'Article',
    '@id': `${opts.url.href}#article`,
    headline: opts.title,
    description: opts.description,
    url: opts.url.href,
    mainEntityOfPage: opts.url.href,
    datePublished: opts.published.toISOString(),
    dateModified: (opts.modified ?? opts.published).toISOString(),
    author: { '@id': id(opts.base, 'person'), '@type': 'Person', name: site.name, url: new URL('/about', opts.base).href },
    publisher: { '@id': id(opts.base, 'person') },
    isPartOf: { '@id': id(opts.base, 'website') },
  };
}
