import { build } from 'esbuild';
import copy from 'esbuild-plugin-copy';

await build({
  entryPoints: ['tasks/**/*.ts'],
  bundle: true,
  platform: 'node',
  outdir: 'dist',
  outbase: '.',
  format: 'cjs',
  minify: true,
  plugins: [
    copy({
      assets: [
        {
          from: 'tasks/**/*.json',
          to: 'tasks',
        },
      ],
    }),
  ],
});
