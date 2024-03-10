import React from "react";
import style from "./LogoLink.module.scss";
import TextLogo from "src/assets/sayerBlack.png?jsx";

const imgProps = !import.meta.env.PROD? {
  src: TextLogo
}: {
  srcset: TextLogo?.join(', '),
  decoding:"async",
  loading:"lazy"
} as const

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
        <img {...imgProps} />
      </a>
    </div>
  );
};
