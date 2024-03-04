import { defineConfig } from "astro/config";
import path from "path";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        src: path.resolve("./src"),
        "@node_modules": path.resolve("./node_modules"),
      },
    },
  },
});
