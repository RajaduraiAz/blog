// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.rajaduraiaz.com',
  integrations: [mdx(), sitemap()],
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});