import { imagesToDistPlugin } from "./imagesToDistPlugin.mjs";
import { imgToWebpPlugin } from "./imgToWebpPlugin.mjs";

/**@type {import("vite").PluginOption[]} */
export const imgOptimizationPlugins = [
  imgToWebpPlugin,
  imagesToDistPlugin,
]