import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { resolve, dirname } from 'node:path';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

import { getSVGSymbolsString } from './scripts/svg';

// https://vite.dev/config/
export default defineConfig( async ({}) => {
  return {
    plugins: [vue(),
      createHtmlPlugin({
        minify: true,
        entry: 'src/main.ts',
        template: 'index.html',
        inject: {
          data: {
            injectSVGSymbols: await getSVGSymbolsString(resolve('src/icons'))
          },
          tags: [
            {
              injectTo: 'body-prepend',
              tag: 'div',
              attrs: {
                id: 'app',
                class: 'app-container'
              }
            }
          ]
        }
      }),
      VueI18nPlugin({
        include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
        runtimeOnly: false,
        compositionOnly: true, 
        fullInstall: true,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/sass/style.scss" as *;',
        },
      },
    },
    base: '/church-app/'
  }
});
