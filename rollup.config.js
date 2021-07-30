import esbuild from 'rollup-plugin-esbuild';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

const DEV = process.env.ROLLUP_WATCH === 'true';

export default {
  input: './src/index.tsx',
  output: {
    file: './public/build/bundle.js',
    format: 'esm',
  },
  plugins: [
    esbuild({
      minify: false,
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
        port: 3000,
        historyApiFallback: true,
      }),
    DEV &&
      livereload({
        watch: 'public',
        port: 3000,
      }),
    !DEV &&
      terser({
        format: {
          comments: false,
          keep_numbers: true,
        },
      }),
  ],
};
