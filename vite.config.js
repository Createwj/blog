import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetIcons, presetAttributify, presetUno } from 'unocss'
import { resolve } from 'path'
import unoConfig from './uno-config'

const pathResolve = dir => {
  return resolve(__dirname, '.', dir)
}

const alias = {
  '@': pathResolve('src'),
  views: pathResolve('src/views'),
  utils: pathResolve('src/utils'),
  style: pathResolve('src/style'),
  assets: pathResolve('src/assets'),
  hooks: pathResolve('src/hooks'),
}

export default defineConfig({
  root: __dirname,
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          vant: ['vant'],
          'vue-router': ['vue-router'],
          axios: ['axios'],
          pdfh5: ['pdfh5'],
        },
      },
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      dts: './auto-import.d.ts',
    }),
    Unocss({
      presets: [presetAttributify(), presetUno(), presetIcons()],
      ...unoConfig,
    }),
  ],
  resolve: {
    // ***** 路径配置新增
    alias, // ***** 路径配置新增
  },
})
