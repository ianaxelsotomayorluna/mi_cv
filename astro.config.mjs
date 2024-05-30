import { defineConfig } from "astro/config";
import path from "path";
import react from "@astrojs/react";
import { imgOptimizationPlugins } from "./src/vite/plugins.mjs";
import svgr from 'vite-plugin-svgr' 

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [[svgr()], ...imgOptimizationPlugins],
    resolve: {
      alias: {
        src: path.resolve("./src"),
        "@node_modules": path.resolve("./node_modules"),
      },
    },
    css: {
      modules: {
        // Esta es la configuración clave para personalizar cómo se generan los identificadores locales
        generateScopedName: (name) => name,
      },
    },
  },
});
