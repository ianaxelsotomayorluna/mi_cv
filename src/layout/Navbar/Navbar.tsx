import React from "react";
import style from "./Navbar.module.scss";
import { useStore } from "@nanostores/react";
import { FStore } from "../../store/config/rootAtom";
import { LogoLink } from "./common/LogoLink/LogoLink";
/**
 * Navbar Component:  Descripción del comportamiento...
 */
export const Navbar = () => {
  // -----------------------CONSTS, HOOKS, STATES
  const { screenInfo } = useStore(FStore, { keys: ["screenInfo"] });
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <header className={style.Navbar}>
      <LogoLink />
    </header>
  );
};
