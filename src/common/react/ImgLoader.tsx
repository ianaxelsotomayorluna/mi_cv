import type { ImgProps } from "src/typings/html";

type Sizes = "200w" | "400w" | "600w" | "800w" | "1200w" | "1600w";

export type ImgLoaderProps = {
  imgImport: string[] | ImageInfo | string;
  containerClassName?: string;
  containerStyles?: ImgProps["style"];
  imgProps?: ImgProps;
  /** From tiene que ser le valor minimo del rango y to el máximo */
  range?: {
    from: Sizes;
    to: Sizes;
  };
};

/**
 * ImgLoader Component: Componente de React que recibe un import estático de una imagen y renderiza el tag img con optimizacion webp en producción
 */
export const ImgLoader = ({
  imgImport,
  containerClassName,
  containerStyles,
  imgProps,
  range,
}: ImgLoaderProps) => {
  // -----------------------CONSTS, HOOKS, STATES
  const props = { ...getImageUrl(imgImport, range), ...imgProps };

  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  if (containerClassName || containerStyles)
    <div className={containerClassName} style={containerStyles}>
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

export function getImageUrl(
  src: ImgLoaderProps["imgImport"],
  range: ImgLoaderProps["range"],
) {
  if (typeof src === "string") return { src };
  if (Array.isArray(src)) {
    const sizeMap = {
      "200w": 0,
      "400w": 1,
      "600w": 2,
      "800w": 3,
      "1200w": 4,
      "1600w": 5,
    } as const;

    if (range) {
      const fromIndex = sizeMap[range.from];
      const toIndex = sizeMap[range.to];

      src = src.filter((_, index) => {
        return index >= fromIndex && index <= toIndex;
      });
    }
    return { srcset: src.join(", ") };
  }
  return { src: src.src };
}
