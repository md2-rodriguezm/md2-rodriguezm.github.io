import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: "/", // para usuario.github.io (rutas absolutas para evitar errores en subpáginas)
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [react()],
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.png", "**/*.heic", "**/*.HEIC"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
