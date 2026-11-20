/** "Engineering & Systems" → "#EngineeringSystems" */
export const hashtag = (s: string) =>
  `#${s
    .split(/[^A-Za-z0-9]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')}`;
