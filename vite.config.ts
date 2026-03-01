import { VitePWA } from 'vite-plugin-pwa'

plugins: [
  react(),
  VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'ビジネス基礎力チェック',
      short_name: 'BizQuiz',
      start_url: '/stest/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/stest/pwa-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/stest/pwa-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })
]
