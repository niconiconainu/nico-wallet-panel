import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from "path";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';



// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'nicoWalletPanel',
      fileName: "index",
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
        tailwindcss(),
        autoprefixer()
      ],
    },
  },
})
