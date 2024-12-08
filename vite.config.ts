import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bolt8/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
