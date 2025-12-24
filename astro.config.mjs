import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rugvedkatole.github.io',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
    },
  },
});
