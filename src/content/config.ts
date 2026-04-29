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
      site: z.string(),                                                          // free text — name of the source publication or site
      sourceType: z.enum(['classical-sunni', 'salafi', 'classical-text', 'academic']).optional(),
      url: z.string().url().optional(),                                          // optional: classical-text citations may not have a URL
      excerpt: z.string(),
      accessed: ISO_DATE.optional(),
    })).min(1),
    updated: ISO_DATE,
  }),
});

export const collections = { topics };
