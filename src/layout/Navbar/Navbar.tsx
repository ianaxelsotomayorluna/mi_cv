import React from "react";
import style from "./Navbar.module.scss";
import { useStore } from "@nanostores/react";
import { FStore } from "../../store/config/rootAtom";
import { LogoLink } from "./common/LogoLink/LogoLink";
import { Icon } from "@iconify/react";
import { Fcol, Frow } from "react-forge-grid";
import { customResponsive } from "../../utils/functions/responsiveUtils";
import { DeskButtons } from "./DeskButtons/DeskButtons";
import { useMobileDrawer } from "./common/useMobileDrawer/useMobileDrawer";

/**
 * Navbar Component:  Descripción del comportamiento...
 */
export const Navbar = () => {
  // -----------------------CONSTS, HOOKS, STATES
  const { screenInfo } = useStore(FStore, { keys: ["screenInfo"] });
  const { content, handleOpen } = useMobileDrawer();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <header className={style.Navbar}>
      <Frow vAlign="middle" hAlign="center">
        <Fcol {...customResponsive(25, 100)}>
          <LogoLink />
        </Fcol>
        {screenInfo.isMobile ? (
          <>
            <Fcol {...customResponsive(15, 50)}>
              <button className="hamburger" onClick={handleOpen}>
                <Icon icon="charm:menu-hamburger" />
              </button>
            </Fcol>
            {content}
          </>
        ) : (
          <DeskButtons />
        )}
      </Frow>
    </header>
  );
};
