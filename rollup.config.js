import path from 'path'
import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import pkg from './package.json'

const FILENAME = pkg.name

export default defineConfig({
  input: path.resolve(__dirname, 'src/index.ts'),
  output: [
    // {
    //   file:`dist/${FILENAME}.umd.js`,
    //   format:'umd',
    //   name:'nut'
    // },
    // {
    //   file:`dist/${FILENAME}.common.js`,
    //   format:'cjs'
    // },
    {
      file: `dist/${FILENAME}.js`,
      format: 'es'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    babel({
      babelHelpers: 'bundled'
    })
  ]
})