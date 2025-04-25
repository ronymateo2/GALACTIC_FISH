import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/galactic-fish/", // 👈 usa el nombre real del repositorio
  plugins: [react(), tailwindcss()],
});
