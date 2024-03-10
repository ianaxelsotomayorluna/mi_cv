//@ts-check

import { parse, resolve } from 'path';
import sharp from 'sharp';
import fs from 'fs';

const QUALITY = {
  fast: 35,
  recommended: 75,
  best: 100
};

class ImageToWebGen {
  static SUPPORTED_EXTENSIONS = [
    '.jpg',
    '.jpeg',
    '.png',
    '.webp',
    '.gif',
    '.avif',
    '.tiff'
  ];
  static IS_PRODUCTION = process.env.NODE_ENV === 'production';
  static SIZES = [200, 400, 600, 800, 1200, 1600];

  /**@returns {import("vite").PluginOption} */
  static plugin() {
    return {
      name: 'vite-forge-img-optimizer',
      enforce: 'pre',
      resolveId: (source) => {
        if (!this.IS_PRODUCTION) return null;

        const { pathId, params } = this.parseId(source);
        
        const qualityType = this.getQuality(params);
        if(!qualityType) return null;

        const { ext } = parse(pathId);
        if (this.isImg(ext)) {
          return `\0optimized-images:${source}`;
        }

        return null;
      },
      load: async (id) => {
        if (!this.IS_PRODUCTION) return null;
        if (!id.startsWith('\0optimized-images:')) return null;


        const imgPath = id.slice('\0optimized-images:'.length);
        const { pathId, params } = this.parseId(imgPath);
        
        const qualityType = this.getQuality(params);
        if(!qualityType) return null;


        const convertedPaths = await this.webpConverter({ imgPath: pathId, qualityType });

        //Se convierte el import de la imagen a un export default en código el cual es un array con los paths de las imágenes convertidas con los 6 breakpoints
        const exports = `export default ${JSON.stringify(convertedPaths)};`;
        return {
          code: exports,
          map: null // O proporciona un source map si es necesario
        };
      }
    };
  }

  /**@param {string} originalId */
  static parseId(originalId) {
    const [pathId, query] = originalId.split('?');
    const queryStr = query || '';
    return {
      originalId,
      pathId,
      query: queryStr ? `?${query}` : '',
      params: new URLSearchParams(queryStr)
    };
  }

  /**@param {string} extension */
  static isImg = (extension) =>
    this.SUPPORTED_EXTENSIONS.includes(extension.toLocaleLowerCase());

  /**@param {{imgPath: string, qualityType?: keyof typeof QUALITY}} props */
  static webpConverter = async ({ imgPath, qualityType = 'recommended' }) => {
    try {
      const { name: imgName, dir: originalDir } = parse(imgPath);
      const imgDir = resolve('optimized-images');
      const imgHash = await this.generateImagHash(imgPath);

      await this.createFoldersIfNotExist(imgDir);

      // Crear un array de promesas para el procesamiento de imágenes
      const imageProcessingPromises = this.SIZES.map(
        (size) =>
          sharp(imgPath)
            .resize(size)
            .webp({ quality: QUALITY[qualityType] })
            .toFile(`${imgDir}/${imgName}-${imgHash}-${size}.webp`) //Imagen webp real generada
      );

      // Esperar a que todas las promesas se resuelvan
      await Promise.all(imageProcessingPromises);

      console.log('Imagen procesada y guardada con éxito.');

      // Aquí se genera un string array con los paths que apuntan al dist
      return this.SIZES.map(
        (size) => `/optimized-images/${imgName}-${imgHash}-${size}.webp ${size}w`
      );
    } catch (error) {
      console.error('Error procesando la imagen:', error);
    }
  };
  
  /**@type {(params: URLSearchParams)=>(null | keyof typeof QUALITY)} */
  static getQuality(params){
    if(params.has('jsx') || params.has('recommended')) return 'recommended';
    if(params.has('fast')) return 'fast';
    if(params.has('best')) return 'best';
    
    return null;
    
  }

  /**@param {string} folderPath */
  static async createFoldersIfNotExist(folderPath) {
    try {
      // Asegúrate de que el camino absoluto siempre se maneje correctamente
      const absolutePath = resolve(folderPath);
      // Usar 'fs.promises.mkdir' con la opción 'recursive: true' elimina la necesidad de verificar cada carpeta individualmente
      await fs.promises.mkdir(absolutePath, { recursive: true });
      console.log(`Folder created or already exists: ${absolutePath}`);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  /**@param {string} filePath */
  static async generateImagHash(filePath) {
    try {
      const metadata = await sharp(filePath).metadata();
      const stats = fs.statSync(filePath);
      const fileSize = stats.size;
      const dimensions = `${metadata.width}x${metadata.height}`;
      const format = metadata.format;

      // Generar un identificador usando dimensiones, tamaño de archivo y formato
      const identifier = `dim-${dimensions}_size-${fileSize}_format-${format}`;
      return identifier;
    } catch (error) {
      console.error('Error generando el identificador de la imagen:', error);
    }
  }
}

export const imgToWebpPlugin = ImageToWebGen.plugin();
