import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambia este puerto por el que desees (ej: 3000, 8080, 4000, etc.)
    host: true, // Permite acceso desde otras IPs en la red local
  },
  base: process.env.NODE_ENV === 'production' ? '/torem/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
