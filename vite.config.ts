import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/stest/',   // ← GitHub Pages用（リポジトリ名）
  server: {
    port: 3000,
  },
});
