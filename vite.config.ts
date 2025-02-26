import { defineConfig } from "vite";
import fg from "fast-glob";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: fg.sync("*.html"),
    },
  },
});
