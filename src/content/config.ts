import { defineCollection, z } from 'astro:content';

const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    arabicTitle: z.string().optional(),
    order: z.number(),
    summary: z.string(),
    sources: z.array(z.object({
      author: z.string(),
      site: z.enum(['SeekersGuidance', 'IslamQA.org', 'Ask Imam', 'hadithanswers.com']),
      url: z.string().url(),
      excerpt: z.string(),
      accessed: z.string(),
    })).min(1),
    updated: z.string(),
  }),
});

export const collections = { topics };
