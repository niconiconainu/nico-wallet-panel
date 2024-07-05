import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'nicoWalletPanel', 
      fileName: 'nico-wallet-panel', 
      formats: ['es', 'umd'], 
    },
    rollupOptions: {
      external: ['ethers'],
      output: {
        globals: {
          ethers: 'ethers',
        },
      },
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
})
