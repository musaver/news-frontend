import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'lucide-react': '/empty.js',
      'lucide-react@0.536.0': '/empty.js',
      'lucide-react@0.487.0': '/empty.js',
      'cmdk': '/empty.js',
      'cmdk@1.1.1': '/empty.js',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react', 'cmdk'],
  },
  build: {
    rollupOptions: {
      external: ['lucide-react', 'cmdk'],
    },
  },
});
