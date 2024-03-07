/// <reference types="astro/client" />

interface ImportMetaEnv {
  /**Activa o desactiva (si se omite) las dev tools*/
  readonly PUBLIC_DEV_TOOLS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
