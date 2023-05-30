import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
  json: {
    namedExports: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/index.scss";`,
      },
    },
  },
});
