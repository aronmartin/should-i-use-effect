import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@should-i-use-effect/ui': path.resolve(__dirname, '../../packages/ui/src'),
    },
  },
});
