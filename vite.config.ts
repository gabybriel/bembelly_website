import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({

  server: {
      proxy: {
        '/api': {
          target: 'http://localhost', // ou l'URL de votre XAMPP
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },


  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
