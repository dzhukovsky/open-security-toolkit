import fg from "fast-glob";
import react from "@vitejs/plugin-react-swc";
import { build } from "esbuild";
import { copy } from "esbuild-plugin-copy";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [react(), buildTasks()],
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: fg.sync("src/**/*.html"),
    },
  },
});

function buildTasks() {
  return {
    name: "build-tasks",
    async closeBundle() {
      await build({
        entryPoints: ["tasks/**/index.ts"],
        bundle: true,
        platform: "node",
        outdir: "dist",
        outbase: ".",
        format: "cjs",
        minify: true,
        logLevel: "info",
        plugins: [
          copy({
            assets: [
              {
                from: "tasks/**/*.json",
                to: "tasks",
              },
            ],
          }),
        ],
      });
    },
  };
}
