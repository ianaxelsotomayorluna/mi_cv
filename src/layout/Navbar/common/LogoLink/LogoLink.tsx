import React from "react";
import style from "./LogoLink.module.scss";
import TextLogo from "src/assets/sayerBlack.png?jsx";

const imgProps = exposeSrc(TextLogo)
/**
 * LogoLink Component:  Descripción del comportamiento...
 */
export const LogoLink = () => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className={style["LogoLink"]}>
      <a href="/">
        <img {...imgProps} decoding="async" loading="lazy" />
      </a>
    </div>
  );
};

export function exposeSrc(src: typeof TextLogo) {
  if(typeof src === 'string') return {src};
  if(Array.isArray(src)) return {srcset: src.join(', ')};
  return {src: src.src}
}