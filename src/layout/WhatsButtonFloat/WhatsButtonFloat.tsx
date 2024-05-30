// ---Dependencies
import { type ReactElement } from "react";
// ---Styles
import style from "./WhatsButtonFloat.module.scss";
import { FloatButton } from "antd";
import { Icon } from "@iconify/react";
import { useStore } from "@nanostores/react";
import { FStore } from "src/store/config/rootAtom";
import { WHATS_INFO } from "src/config/socialInfo";
/**
 * WhatsButtonFloat Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 * @returns {ReactElement}
 */
export function WhatsButtonFloat(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const { screenInfo } = useStore(FStore, { keys: ["screenInfo"] });
  const urlType = screenInfo.isMobile ? "mobileUrl" : "desktopUrl";
  return (
    <FloatButton
      href={WHATS_INFO[urlType]}
      target="_blank"
      icon={<Icon icon="mingcute:whatsapp-line" />}
      className={style.WhatsButtonFloat}
    />
  );
}
