// vite.config.js
export default {
  build: {
    rollupOptions: {
      input: './src/server.ts'
    }
  },
  optimizeDeps: {
    include: ["dependency-to-include"]
  }
}