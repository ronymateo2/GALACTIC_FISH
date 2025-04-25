import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/GALACTIC_FISH/",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      manifest: {
        name: "Galactic Fish",
        short_name: "Fish",
        description: "Catch fish in space. Compete. Trade. Win.",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,css,html,webp,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api-game\.bloque\.app\/game\//,
            handler: "NetworkFirst",
            options: {
              cacheName: "game-api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 86400, // 1 día
              },
              networkTimeoutSeconds: 4,
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com/,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-stylesheets",
            },
          },
        ],
      },
    }),
  ],
});
