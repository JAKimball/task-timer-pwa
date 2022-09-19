/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      treeshake: 'recommended',
    },
  },
  plugins: [
    react(),
    // eslint-disable-next-line new-cap
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        // enabled: true
      },
      strategies: 'generateSW',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,gif,svg,woff2}'],
      },
      includeAssets: ['favicon.png', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Time Viewer',
        short_name: 'Time Viewer',
        description: 'A visual task timer for corner-of-the-eye time awareness',
        theme_color: '#fe8c3c',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
})
