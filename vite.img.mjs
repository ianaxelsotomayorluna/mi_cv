import path, { parse } from 'path';
import fs from 'fs';
import sharp from 'sharp';

const supportedExtensions = [
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.gif',
  '.avif',
  '.tiff'
];
const supportedParams = ['.jsx', '.recommended', '.fast', '.best'];

/**@type {import("vite").PluginOption} */
export const imgToWebpPlugin = {
  name: 'vite-forge-img-optimizer',
  enforce: 'pre',
  resolveId: async (source, importer) => {
    const { params, pathId } = parseId(source);
    if (supportedExtensions?.includes(ext)) {
      const convertedPath = await webpConverter({imgPath: pathId});

      return this.resolve(convertedPath, importer, { skipSelf: true })
    }
    return null
  },
  load: async (id) => {
    const { params, pathId } = parseId(id);

    const { ext } = path.parse(pathId);
    if (supportedExtensions?.includes(ext)) {
      console.log({ params, pathId, id });
    }
  }
};

/**@param {string} originalId */
function parseId(originalId) {
  const [pathId, query] = originalId.split('?');
  const queryStr = query || '';
  return {
    originalId,
    pathId,
    query: queryStr ? `?${query}` : '',
    params: new URLSearchParams(queryStr)
  };
}

const quality = {
  fast: 35,
  recommended: 75,
  best: 100
};

const sizes = [200, 400, 600, 800, 1200, 1600];

async function webpConverter({ imgPath, qualityType = 'recommended' }) {
  try {
    const { name: imgName, dir: originalDir } = parse(imgPath);
    const imgDir = `${originalDir}/${imgName}-optimized`;

    await createFoldersIfNotExist(imgDir);

    // Crear un array de promesas para el procesamiento de imágenes
    const imageProcessingPromises = sizes.map((size) =>
      sharp(imgPath)
        .resize(size)
        .webp({ quality: quality[qualityType] })
        .toFile(`${imgDir}/${imgName}-${size}w.webp`)
    );

    // Esperar a que todas las promesas se resuelvan
    await Promise.all(imageProcessingPromises);

    console.log('Imagen procesada y guardada con éxito.');
    return `${imgDir}/${imgName}-${1600}w.webp`;
  } catch (error) {
    console.error('Error procesando la imagen:', error);
  }
}
