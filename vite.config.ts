import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'favicon.ico'
      ],

      manifest: {
        name: 'АвтоПраво70',
        short_name: 'АвтоПраво70',

        description:
          'Автоюрист Томск. ОСАГО, КАСКО, страховые выплаты после ДТП.',

        theme_color: '#c1121f',

        background_color: '#ffffff',

        display: 'standalone',

        orientation: 'portrait',

        start_url: '/',

        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
