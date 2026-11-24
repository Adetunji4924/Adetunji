import type { APIRoute } from 'astro';
import { site, socials } from '@/config/site';
import { capabilities } from '@/data/capabilities';
import { categories } from '@/content.config';
import { getCaseStudies, getArchive, getArticles } from '@/lib/content';

/**
 * /llms.txt: a plain-text summary of the site for AI assistants and answer engines
 * (https://llmstxt.org). Built from the same content as the pages, so it never drifts.
 */
export const GET: APIRoute = async ({ site: base }) => {
  const url = (path: string) => new URL(path, base).href;
  const cases = await getCaseStudies();
  const websites = await getArchive('websites');
  const archive = [...(await getArchive('development')), ...(await getArchive('design'))];
  const articles = await getArticles();

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name} (also written ${site.brand}; full name ${site.legalName}) is Head of IT at Greenleaf Africa, founder of Vehtriq and co-founder, product lead and creative director of Equalsphere. Career path: from creative design (2022) through frontend and full-stack engineering and systems architecture to product and technology leadership. Education: B.Sc. (Ed.) in Mathematics, University of Ilorin.`,
    '',
    `Philosophy: ${site.philosophy.join(' ')}`,
    '',
    '## Capabilities',
    '',
    ...capabilities.map((c) => `- ${c.area}: ${c.items.join(', ')}`),
    '',
    '## Case studies',
    '',
    ...cases.map(
      (w) =>
        `- [${w.data.title}](${url(`/work/${w.id}`)}): ${w.data.summary} Role: ${w.data.role}. Status: ${w.data.status}. Category: ${categories[w.data.category]}.`,
    ),
    '',
    '## Websites (designed and built, live)',
    '',
    ...websites.map((w) => `- [${w.data.title}](${w.data.links[0]?.href ?? url('/work')}): ${w.data.summary} ${w.data.role}.`),
    '',
    '## Earlier projects',
    '',
    ...archive.map((w) => `- ${w.data.title}: ${w.data.summary}`),
    '',
    ...(articles.length
      ? ['## Writing', '', ...articles.map((a) => `- [${a.data.title}](${url(`/writing/${a.id}`)}): ${a.data.excerpt}`), '']
      : []),
    '## Pages',
    '',
    `- [About](${url('/about')}): background, journey, principles`,
    `- [Work](${url('/work')}): all projects`,
    `- [Writing](${url('/writing')}): essays and notes`,
    `- [Contact](${url('/contact')}): contact form and email`,
    '',
    '## Contact',
    '',
    `- Email: ${site.email}`,
    ...socials.map((s) => `- ${s.label}: ${s.href}`),
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
