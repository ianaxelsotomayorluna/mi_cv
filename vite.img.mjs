import path from 'path';
import svgo from 'svgo';
import fs from 'fs';
import { imagetools } from 'vite-imagetools';

const supportedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif", ".tiff"];

/**@type {import("vite").PluginOption[]} */
export const imgPlugins = [
  imagetools({
    extendOutputFormats: (builtins) => ({
      ...builtins,
      jsx: () => (metadatas) => {
        const srcSet = metadatas
          .map((meta) => `${meta.src} ${meta.width}w`)
          .join(', ');

        let largestImage;
        let largestImageSize = 0;
        for (let i = 0; i < metadatas.length; i++) {
          const m = metadatas[i];
          if (m?.width > largestImageSize) {
            largestImage = m;
            largestImageSize = m.width;
          }
        }
        console.log('srcSet');
        console.log(srcSet);
        return {
          srcSet,
          width:
            largestImage === null || largestImage === void 0
              ? void 0
              : largestImage.width,
          height:
            largestImage === null || largestImage === void 0
              ? void 0
              : largestImage.height
        };
      }
    }),
    defaultDirectives: (url) => {
      if (url.searchParams.has('jsx')) {
        const { jsx: jsx2, ...params } = Object.fromEntries(
          url.searchParams.entries()
        );
        const urlOptions = {
          format: 'webp',
          quality: '75',
          w: '200;400;600;800;1200',
          withoutEnlargement: '',
          ...params,
          as: 'jsx'
        };
        return new URLSearchParams(urlOptions);
      }
      return new URLSearchParams();
    }
  }),
  {
    name: 'qwik-city-image-jsx',
    load: {
      order: 'pre',
      handler: async (id) => {
        const { params, pathId } = parseId(id);
        const extension = path.extname(pathId).toLowerCase();
        if (extension === '.svg' && params.has('jsx')) {
          const code2 = await fs.promises.readFile(pathId, 'utf-8');
          return {
            code: code2,
            moduleSideEffects: false
          }
        }
      }
    },
    transform: (code2, id)=>{
      id = id.toLowerCase();
      const { params, pathId } = parseId(id);
      if (!params.has("jsx")) return null;
      
      const extension = path.extname(pathId).toLowerCase();
      if (supportedExtensions?.includes(extension)) {
        if (!code2.includes("srcSet")) {
          return null
        }
        const index = code2.indexOf("export default");
        const final = code2.slice(0, index)
        return final
      } else if (extension === ".svg") {
        const svgAttributes = {};
        const data = (0, svgo.optimize)(code2, {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false
                }
              }
            },
            {
              name: "customPluginName",
              fn: ()=>({
                element: {
                  exit: (node)=>{
                    if(node.name === 'svg'){
                      node.name = "g";
                      Object.assign(svgAttributes, node.attributes);
                      node.attributes = {};
                    }
                  }
                }
              })
            }
          ]
        }).data;

        svgAttributes.dangerouslySetInnerHTML = data.slice(3, -3);
        return JSON.stringify(svgAttributes)
      }

    }
  }
]

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
