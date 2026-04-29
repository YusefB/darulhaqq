import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://darulhaqq.vercel.app',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
});
