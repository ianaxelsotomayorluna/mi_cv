export type ImgProps = Omit<
  JSX.IntrinsicElements["img"],
  "height" | "width" | "src" | "srcset" | "srcSet"
>;
