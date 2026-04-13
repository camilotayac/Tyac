import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://camilotayac.github.io',
  base: '/Tyac',
  markdown: {
    shikiConfig: {
      // Tema Dracula clásico para los bloques de código
      theme: 'dracula',
    },
  },

  integrations: [mdx()],
});