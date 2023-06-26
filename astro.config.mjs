import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ...
  site: 'https://ryanp.vercel.app',
  integrations: [sitemap()]
});