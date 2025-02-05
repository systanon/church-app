import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

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
      })
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
  }
});
