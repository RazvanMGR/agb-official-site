import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/agb-official-site/', // 👈 important pour GitHub Pages
  build: {
    outDir: 'dist'
  }
});
