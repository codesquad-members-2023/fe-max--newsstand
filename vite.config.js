import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@style": path.resolve(__dirname, "/src/style"),
      "@assets": path.resolve(__dirname, "/src/assets"),
      "@components": path.resolve(__dirname, "/src/components"),
      "@utils": path.resolve(__dirname, "/src/utils"),
      "@store": path.resolve(__dirname, "/src/store"),
    },
  },
});
