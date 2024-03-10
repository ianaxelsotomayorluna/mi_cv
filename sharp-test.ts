import sharp from 'sharp';
import path, { parse } from 'path';
import fs from 'fs';

const testImg = './public/prueba.png';

const quality ={
  fast: 35,
  recommended: 75,
  best: 100
}

type Opt = {
  imgPath: string;
  qualityType?: keyof typeof quality;
};

const sizes = [200, 400, 600, 800, 1200, 1600] as const;

async function main({ imgPath, qualityType = 'recommended' }: Opt) {
  try {
    const { name: imgName, dir: originalDir } = parse(imgPath);
    const imgDir = `${originalDir}/${imgName}-optimized`;

    await createFoldersIfNotExist(imgDir);

     // Crear un array de promesas para el procesamiento de imágenes
     const imageProcessingPromises = sizes.map(size =>
      sharp(imgPath)
        .resize(size)
        .webp({ quality: quality[qualityType] })
        .toFile(`${imgDir}/${imgName}-${size}w.webp`)
    );

    // Esperar a que todas las promesas se resuelvan
    await Promise.all(imageProcessingPromises);

    console.log('Imagen procesada y guardada con éxito.');
    return `${imgDir}/${imgName}-${1600}w.webp`
  } catch (error) {
    console.error('Error procesando la imagen:', error);
  }
}

main({ imgPath: testImg });

async function createFoldersIfNotExist(folderPath) {
  try {
    // Asegúrate de que el camino absoluto siempre se maneje correctamente
    const absolutePath = path.resolve(folderPath);
    // Usar 'fs.promises.mkdir' con la opción 'recursive: true' elimina la necesidad de verificar cada carpeta individualmente
    await fs.promises.mkdir(absolutePath, { recursive: true });
    console.log(`Folder created or already exists: ${absolutePath}`);
  } catch (error) {
    console.error('Error:', error);
  }
}
