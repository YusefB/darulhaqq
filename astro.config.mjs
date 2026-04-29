import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: 'https://darulhaqq.vercel.app',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
  integrations: [
    sitemap(),
    pagefind(),
  ],
});
