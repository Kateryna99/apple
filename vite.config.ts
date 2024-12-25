import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    watch: {
      usePolling: true,
    },
  },
  base: '/apple/',
  build: {
    outDir: 'dist',
  },
});
