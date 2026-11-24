import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

export const categories = {
  engineering: 'Engineering & Systems',
  product: 'Products & Innovation',
  leadership: 'Technology Leadership',
  design: 'Design & Brand',
  web: 'Websites',
} as const;

export type CategoryKey = keyof typeof categories;

/**
 * Projects. `tier: case-study` gets its own page under /work/[slug];
 * `tier: archive` is listed compactly on /work only.
 * `draft: true` keeps an entry out of every build output.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One-line framing shown after the title in the homepage showcase. */
      headline: z.string().optional(),
      summary: z.string().max(180),
      role: z.string(),
      category: z.enum(['engineering', 'product', 'leadership', 'design', 'web']),
      tier: z.enum(['case-study', 'archive']),
      /** Human-readable status, e.g. "Pilot phase". Must be factual. */
      status: z.string(),
      statusKind: z.enum(['live', 'pilot', 'in-development', 'archived', 'delivered']),
      period: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      draft: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Illustrative cover for projects without approved imagery. */
      visual: z.enum(['modules', 'domains', 'platform']).optional(),
      team: z.string().optional(),
      tech: z.array(z.string()).default([]),
      techLabel: z.string().default('Technologies'),
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
      archiveGroup: z.enum(['websites', 'development', 'design']).optional(),
      /** Up to four facts from the case study, shown as cards. Facts only. */
      highlights: z
        .array(
          z.object({
            title: z.string(),
            text: z.string().max(140),
            icon: z.enum(['blocks', 'database', 'migrate', 'team', 'fuel', 'map', 'edge', 'spark', 'compass', 'palette', 'modules', 'layers']),
          }),
        )
        .max(4)
        .default([]),
    }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().max(220),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    topic: z.enum([
      'Engineering & Architecture',
      'AI & Technology',
      'Product',
      'Business',
      'Leadership & People',
      'Books & Ideas',
      'Learning',
    ]),
    draft: z.boolean().default(true),
  }),
});

const experience = defineCollection({
  loader: file('./src/content/experience/timeline.json'),
  schema: z.object({
    stage: z.string(),
    title: z.string(),
    /** Only facts supplied by the owner. Omit rather than guess. */
    period: z.string().optional(),
    detail: z.string(),
    current: z.boolean().default(false),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, writing, experience };
