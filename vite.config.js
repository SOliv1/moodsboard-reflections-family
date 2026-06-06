import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/moodsboard-reflections-family/' : '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        
        'favicon.png',
        'pwa/favicon-16x16.png',
        'pwa/favicon-32x32.png',
        'pwa/apple-touch-icon-152.png',
        'pwa/apple-touch-icon-167.png',
        'pwa/apple-touch-icon-180.png'
      ],
      manifest: {
        id: '/moodsboard-reflections-family/',
        name: 'Reflections Family Moods Board',
        short_name: 'Moods Board',
        description: 'A mobile-first palette board for seasonal, cinematic, and impressionist colour studies.',
        theme_color: '#f6efe4',
        background_color: '#f6efe4',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/moodsboard-reflections-family/',
        start_url: '/moodsboard-reflections-family/',
        icons: [
          {
            src: 'pwa/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'pwa/icon-maskable-1024.png',
            sizes: '1024x1024',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,json}'],
        globIgnores: ['**/impressionist-orb-identity-upscaled.png'],
        maximumFileSizeToCacheInBytes: 20 * 1024 * 1024
      }
    })
  ]
}));
