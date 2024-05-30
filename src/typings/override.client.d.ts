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

declare module "*.png?jsx" {
  const metadata: string[] | ImageInfo | string;
  export default metadata;
}

declare module "*.png?best" {
  const metadata: string[] | ImageInfo | string;
  export default metadata;
}
