import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(async ({ command }) => {

  if(command === 'build') {
    return {
      plugins: [react()],
      base: '/github-pages-react/'
    }
  }

  return {
    plugins: [react()],
  }
})
