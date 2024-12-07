import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bolt8/', // Add this line with your repository name
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
