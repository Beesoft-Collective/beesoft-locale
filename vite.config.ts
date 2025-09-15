import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import path from 'node:path';
import gzipPlugin from 'rollup-plugin-gzip';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: 'tsconfig.json',
      rollupTypes: true,
      outDir: 'types',
      insertTypesEntry: true,
    }),
    gzipPlugin(),
  ],
  build: {
    lib: {
      entry: path.resolve('src/main.ts'),
      name: 'BeesoftLocale',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    minify: 'esbuild',
    sourcemap: false,
  }
})
