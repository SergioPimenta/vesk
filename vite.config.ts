import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_URL || '/',
  build: {
    // O bundle de servidor (pré-render) não precisa das imagens de /public.
    copyPublicDir: !isSsrBuild,
  },
  server: {
    // Saídas de build não são código-fonte; vigiá-las derruba o dev server no Windows (EBUSY).
    watch: { ignored: ['**/dist/**', '**/dist-ssr/**'] },
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
      '/uploads': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    }
  }
}));
