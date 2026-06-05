import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://works.achrag.sbs',
  devToolbar: { enabled: false },
  vite: {
    build: { assetsInlineLimit: 0 }
  }
});
