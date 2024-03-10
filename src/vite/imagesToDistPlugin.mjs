//@ts-check

import { join } from "path";
import { promises as fs } from 'fs';

class MoveImagesPlugin {
  /**@returns {import("vite").PluginOption} */
  static plugin() {
    const moveDir = this.moveDir
    return {
      name: 'move-optimized-images',
      enforce: 'post',
      async closeBundle() {
        const src = join(process.cwd(), 'optimized-images');
        const dest = join(process.cwd(), 'dist', 'optimized-images');
    
        try {
          await moveDir(src, dest);
          console.log('Optimized images moved to dist folder.');
        } catch (err) {
          console.error('Failed to move optimized images:', err);
        }
      }
    };
  }

  /**@param {string} src  @param {string} dest */
  static async moveDir(src, dest) {
    try {
  
      // Verifica si el destino existe y borra si es necesario
      await fs
        .access(dest)
        .then(async () => {
          await fs.rm(dest, { recursive: true, force: true });
          console.log(`Existing directory at ${dest} removed.`);
        })
        .catch(() => {
          // El directorio de destino no existe, podemos proceder
        });
  
      // Intenta mover el directorio ahora que el destino ha sido limpiado
      await fs.rename(src, dest);
      console.log(`Directory moved from ${src} to ${dest}`);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`Directory not found: ${src}, nothing to move.`);
      }else{
        console.error(`Failed to move directory: ${error}`);
        throw error; // Propaga el error si no es un caso manejable
      }
    }
  }
}

export const imagesToDistPlugin = MoveImagesPlugin.plugin();
