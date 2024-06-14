import { Fcol, Frow } from "react-forge-grid";
import style from "./Footer.module.scss";
import { Icon } from "@iconify/react";
import { basicResponsive } from "src/utils/functions/responsiveUtils";
import { FStore } from "src/store/config/rootAtom";
import { WHATS_INFO } from "src/config/socialInfo";
import { useStore } from "@nanostores/react";

/**
 * Footer Component:  Descripción del comportamiento...
 */
export const Footer = () => {
  // -----------------------CONSTS, HOOKS, STATES
  const { screenInfo } = useStore(FStore, { keys: ["screenInfo"] });
  const urlType = screenInfo.isMobile ? "mobileUrl" : "desktopUrl";
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <footer className={style["Footer"]}>
      <h3>Contáctame</h3>
      <Frow hAlign="center">
        <Fcol {...basicResponsive(25)}>
          <div className="card">
            <Icon icon="material-symbols:mail-outline" />
            <h5>ianaxelsotomayorluna@gmail.com</h5>
          </div>
        </Fcol>
        <Fcol {...basicResponsive(25)}>
          <a
            href={WHATS_INFO[urlType]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card">
              <Icon icon="mingcute:whatsapp-line" />
              <h5>{WHATS_INFO.channelName}</h5>
            </div>
          </a>
        </Fcol>
      </Frow>
    </footer>
  );
};
