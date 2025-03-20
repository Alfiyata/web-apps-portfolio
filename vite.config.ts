import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

function locatePATH (path: string) {
  return fileURLToPath(new URL(path, import.meta.url));
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': locatePATH('./src'),
      '~@': locatePATH('./src'),
      '@assets': locatePATH('./src/assets'),
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': locatePATH('./src/components'),
      '@layouts': locatePATH('./src/layouts'),
      '@views': locatePATH('./src/views'),
      '@styles': locatePATH('./src/styles'),
      '@router': locatePATH('./src/router')
    },
  },
})
