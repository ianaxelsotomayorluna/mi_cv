import React from 'react';

type Props = {
  imgImport: string[] | ImageInfo | string;
  containerClassName?: string;
  className?: string;
};

/**
 * ImgLoader Component:  Descripción del comportamiento...
 */
export const ImgLoader = ({
  imgImport,
  className,
  containerClassName
}: Props) => {
  // -----------------------CONSTS, HOOKS, STATES
  const imgProps = { ...getImageUrl(imgImport), className };

  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  if (containerClassName)
    <div className={containerClassName}>
      <Img {...imgProps} />
    </div>;

  // -----------------------RENDER
  return <Img {...imgProps} />;
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
    Pick<Props, 'className'>
) {
  return (
    <img
      {...props}
      className={props.className || ''}
      decoding="async"
      loading="lazy"
      width="1600"
      height="1600"
    />
  );
}

export function getImageUrl(src: Props['imgImport']) {
  if (typeof src === 'string') return { src };
  if (Array.isArray(src)) return { srcset: src.join(', ') };
  return { src: src.src };
}
