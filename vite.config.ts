// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  }
})
