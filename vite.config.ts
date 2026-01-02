import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Optimize build for production
    minify: 'esbuild', // Use esbuild (default, faster and no extra dependency)
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
        },
      },
    },
    // Generate source maps for better debugging (optional, remove in production)
    sourcemap: false,
  },
  // Performance optimizations
  server: {
    port: 5173,
    strictPort: false,
    host: 'localhost',
    headers: {
      'Cache-Control': 'no-cache',
    },
    hmr: {
      overlay: true,
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
  },
});
