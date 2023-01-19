import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "~mapbox-gl": path.resolve(__dirname, "node_modules/mapbox-gl"),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
