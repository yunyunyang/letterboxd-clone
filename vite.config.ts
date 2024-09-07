import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// https://vitejs.dev/guide/static-deploy.html#github-pages
export default defineConfig({
  plugins: [vue()],
  base: '/letterboxd-clone/',
})
