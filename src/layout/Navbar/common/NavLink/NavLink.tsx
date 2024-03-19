import React from "react";
import style from "./NavLink.module.scss";
import { useStore } from "@nanostores/react";
import { FStore } from "../../../../store/config/rootAtom";

interface Props {
  href: string;
  label: string;
}

/**
 * NavLink Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const NavLink = ({ href, label }: Props) => {
  // -----------------------CONSTS, HOOKS, STATES
  const { routeInfo } = useStore(FStore, { keys: ["routeInfo"] });
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <a
      href={href}
      className={`${style.NavLink}  ${routeInfo?.pathname === href ? "active" : ""}`}
    >
      {label}
    </a>
  );
};
