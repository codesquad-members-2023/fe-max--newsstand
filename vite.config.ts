// vite.config.js
export default {
  build: {
    rollupOptions: {
      input: "server.ts",
    },
  },
  optimizeDeps: {
    include: ["dependency-to-include"],
  },
};
