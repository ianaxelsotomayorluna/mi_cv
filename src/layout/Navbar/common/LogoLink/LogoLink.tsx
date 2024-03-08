import React from "react";
import style from "./LogoLink.module.scss";
import TextLogo from "public/sayerBlack.png";

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
        <img src={TextLogo.src} />
      </a>
    </div>
  );
};
