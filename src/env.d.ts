/// <reference types="astro/client" />

interface ImportMetaEnv {
  /**Activa o desactiva (si se omite) las dev tools*/
  readonly PUBLIC_DEV_TOOLS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImageInfo {
  src: string;
  width: number;
  height: number;
  format: string;
}

declare module '*.png' {
  const cont: ImageInfo;
  export default cont;
}


declare module '*.png?jsx' {
  const content2: string[] | ImageInfo | string;
  export default content2;
}

