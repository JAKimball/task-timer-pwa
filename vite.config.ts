import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint-disable-next-line new-cap
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        // enabled: true
      },
    }),
  ],
});
