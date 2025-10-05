import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/e-commerce_allegro/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
