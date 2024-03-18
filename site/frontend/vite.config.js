import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        "registerType": 'autoUpdate',
        "name":"Blogify Firm",
        "short_name":"Blogify",
        "display": "standalone",
        "background_color": "#96351F",
        "theme_color": "#96351F",
        "icons":[
          {
            src: "Business/Blogify/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Blogify/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      } 
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
