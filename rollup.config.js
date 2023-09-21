import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/components.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    sourcemap: true,
    name: "App"
  },
  plugins: [
    svelte(),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
  ],
};