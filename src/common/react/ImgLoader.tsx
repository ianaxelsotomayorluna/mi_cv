import React from "react";
import { ImgProps } from "../types/html";

type Props = {
  imgImport: string[] | ImageInfo | string;
  containerClassName?: string;
  containerStyles?: ImgProps["style"];
  imgProps?: ImgProps;
};

/**
 * ImgLoader Component: Componente de React que recibe un import estático de una imagen y renderiza el tag img con optimizacion webp en producción
 */
export const ImgLoader = ({
  imgImport,
  containerClassName,
  imgProps,
}: Props) => {
  // -----------------------CONSTS, HOOKS, STATES
  const props = { ...getImageUrl(imgImport), ...imgProps };

  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  if (containerClassName)
    <div className={containerClassName}>
      <Img {...props} />
    </div>;

  // -----------------------RENDER
  return <Img {...props} />;
};

function Img(
  props: (
    | {
        src: string;
        srcset?: undefined;
      }
    | {
        srcset: string;
        src?: undefined;
      }
  ) &
    ImgProps,
) {
  return (
    <img
      {...props}
      decoding="async"
      loading="lazy"
      width="1600"
      height="1600"
    />
  );
}

export function getImageUrl(src: Props["imgImport"]) {
  if (typeof src === "string") return { src };
  if (Array.isArray(src)) return { srcset: src.join(", ") };
  return { src: src.src };
}
