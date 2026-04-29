# Dār al-Ḥaqq

Traditional Sunni Islam — the ʿaqīdah of the Salaf, the four madhāhib, the Ashʿarī and Māturīdī schools.

Static Astro site. Content lives in `src/content/topics/*.md`. Pages auto-render from the collection.

## Local dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output
npm run preview  # serve the built site
```

## Adding a new topic

1. Create `src/content/topics/<slug>.md`. The slug becomes the URL: `/topics/<slug>`.
2. Fill in the frontmatter (all fields required unless marked optional):

```yaml
---
title: "The English title"
arabicTitle: "العنوان بالعربية"  # optional
order: 6                          # display order on the homepage
summary: "1–2 sentence summary."
updated: "2026-04-28"
sources:
  - author: "Shaykh Name"
    site: "SeekersGuidance"       # one of: SeekersGuidance | IslamQA.org | Ask Imam | hadithanswers.com
    url: "https://..."
    excerpt: "Verbatim quote, 80–200 words."
    accessed: "2026-04-28"
---
```

3. Write 2–3 short framing sections in the markdown body (use `### Heading` for subheads — they render as gold small caps).
4. Verify: `npx astro check && npm run build`.
5. Commit and push. Vercel auto-deploys.

## Sourcing rules

- Every `excerpt` must be verbatim from the linked URL — no paraphrasing.
- If you can't verify a quote at the cited URL, drop it. Better fewer sources than fabricated ones.
- Stick to the four whitelisted sites. Adding a new source site means updating `src/content/config.ts` and the Sources page.
