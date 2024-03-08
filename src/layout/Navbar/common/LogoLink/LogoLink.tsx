import React from "react";
import style from "./LogoLink.module.scss";
import TextLogo from "public/sayerBlack.png?jsx";

/**
 * LogoLink Component:  Descripción del comportamiento...
 */
export const LogoLink = () => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  console.log("TextLogo");
  console.log(TextLogo);

  // -----------------------RENDER
  return (
    <div className={style["LogoLink"]}>
      <a href="/">
        <img src={TextLogo} />
      </a>
    </div>
  );
};
