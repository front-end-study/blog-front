import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: []
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/scss/common.scss" as *;`
      }
    }
  },
  build: {
    outDir: 'blob'
  },
  // /blob/
  base: '/'
});
