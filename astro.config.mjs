// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Override the production origin for custom domains.
const site =
  process.env.PUBLIC_SITE_URL || 'https://portafolio-ag57.vercel.app';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx()],
  vite: { plugins: [tailwindcss()] },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
