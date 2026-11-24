import { getCollection, type CollectionEntry } from 'astro:content';

export type Work = CollectionEntry<'work'>;
export type Article = CollectionEntry<'writing'>;
export type Milestone = CollectionEntry<'experience'>;

const byOrder = <T extends { data: { order: number } }>(a: T, b: T) => a.data.order - b.data.order;

/** Published work only. Drafts never reach a page, list or sitemap. */
export async function getWork() {
  return (await getCollection('work', ({ data }) => !data.draft)).sort(byOrder);
}

export async function getCaseStudies() {
  return (await getWork()).filter((w) => w.data.tier === 'case-study');
}

export async function getFeaturedWork() {
  return (await getCaseStudies()).filter((w) => w.data.featured);
}

export async function getArchive(group: 'websites' | 'development' | 'design') {
  return (await getWork()).filter((w) => w.data.tier === 'archive' && w.data.archiveGroup === group);
}

export async function getArticles() {
  return (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export async function getTimeline() {
  return (await getCollection('experience', ({ data }) => !data.draft)).sort(byOrder);
}

export function readingTime(text: string | undefined) {
  const words = (text ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
