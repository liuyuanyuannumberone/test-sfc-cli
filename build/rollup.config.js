// rollup.config.js
import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
// import nodeResolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser'
import clear from 'rollup-plugin-clear'
import minimist from 'minimist'
// import css from 'rollup-plugin-css-only'

const argv = minimist(process.argv.slice(2))

const config = {
  input: 'src/index.js',
  output: {
    name: 'TestSfcCli', //在想要使用全局变量名来表示你的 bundle 时，输出格式必须指定为 iife 或 umd。
    //同一个页面上的其他脚本可以通过这个变量名来访问你的 bundle 导出。
    exports: 'named' // import TestSfcCli from '@liuyuanyuan_npm/test-sfc-cli'
    // https://rollupjs.org/configuration-options/#output-exports
  },
  plugins: [
    commonjs(),
    // nodeResolve(),
    // css({
    //   output: 'css/TestSfcCli.css',
    // }),
    vue({
      css: true, //默认true,是否将css inject js中,配合rollup-plugin-css-only
      compileTemplate: true,
      style: {
        postcssPlugins: [require('autoprefixer')]
      }
    }),
    babel({
      // according to the issue, using .babelrc.js can ignore plugins option
      // https://github.com/rollup/plugins/issues/381
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
      exclude: 'node_modules/**'
    }),
    clear({
      // required, point out which directories should be clear.
      targets: ['dist']
      // optional, whether clear the directores when rollup recompile on --watch mode.
      // watch: true, // default: false
    })
  ]
}

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(terser())
}

export default config
