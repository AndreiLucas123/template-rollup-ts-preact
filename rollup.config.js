import esbuild from 'rollup-plugin-esbuild';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

const DEV = process.env.ROLLUP_WATCH === 'true';

export default {
  input: './src/main.tsx',
  output: {
    file: './public/build/bundle.js',
    format: 'esm',
  },
  plugins: [
    esbuild({
      minify: !DEV,
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      // Like @rollup/plugin-replace
      define: {
        __DEV__: DEV,
      },
    }),
    scss(),
    nodeResolve(),
    DEV &&
      serve({
        open: true,
        contentBase: 'public',
      }),
    DEV &&
      livereload({
        watch: 'public',
      }),
  ],
};
