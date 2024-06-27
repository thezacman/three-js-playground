import { defineConfig } from 'vite';

export default defineConfig({
  base: '/three-js-playground/',
  build: {
    outDir: 'docs',
    sourcemap: true,
  },
});
