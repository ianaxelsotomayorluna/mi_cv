import type { ReactElement } from "react";
import style from "./IconCard.module.scss";

interface Props {
  url: string;
  icon: ReactElement;
}

/**
 * IconCard Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const IconCard = ({ icon, url }: Props) => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <a
      href={url}
      className={style["IconCard"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
