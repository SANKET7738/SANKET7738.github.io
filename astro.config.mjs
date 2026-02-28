// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://SANKET7738.github.io",
  output: 'static',
  redirects: {
    '/resume': '/resume.pdf',
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
