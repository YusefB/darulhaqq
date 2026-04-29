import { defineCollection, z } from 'astro:content';

const ISO_DATE = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD');

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
      accessed: ISO_DATE,
    })).min(1),
    updated: ISO_DATE,
  }),
});

export const collections = { topics };
