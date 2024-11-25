import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSitemap from "vite-plugin-sitemap";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/", // Define the base URL of your project. Change this if deploying to a subpath.
  plugins: [
    react(),
    vitePluginSitemap({
      hostname: "https://cozycova.vercel.app", // Replace with your actual domain
      changefreq: "daily",
      priority: 0.8,
      exclude: ["/404"], // Exclude unwanted pages like 404
    }),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Cozycova Homestay",
        short_name: "Cozycova",
        description: "Experience the serenity of Cozycova Homestay in Munnar.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],

  build: {
    outDir: "dist", // Directory where the build files will be placed
    sourcemap: true, // Enable source maps for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          // Split dependencies for optimized loading
          react: ["react", "react-dom"],
        },
      },
    },
  },
  server: {
    open: true, // Automatically open the app in the browser on server start
    host: true, // Allow access via network IP
    port: 3000, // Default development server port
  },
});
