import React from "react";
import { useBoolean } from "../../../../utils/hooks/useBoolean";
import { Drawer } from "antd";
import { LogoLink } from "../LogoLink/LogoLink";
import { Fcol, Frow } from "react-forge-grid";
import { NavLink } from "../NavLink/NavLink";
import { LocationAndSocial } from "../LocationAndSocial/LocationAndSocial";

/**
 * useMobileDrawer Component:  Descripción del comportamiento...
 */
export const useMobileDrawer = () => {
  // -----------------------CONSTS, HOOKS, STATES
  const { value, setTrue, setFalse } = useBoolean();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return {
    handleOpen: setTrue,
    content: (
      <Drawer title={<LogoLink />} onClose={setFalse} open={value}>
        <Frow vAlign="middle" hAlign="center" vSpace={10}>
          <Fcol span={100}>
            <NavLink href="/" label="Inicio" />
          </Fcol>
          <Fcol span={100}>
            <NavLink href="/productos/" label="Productos" />
          </Fcol>
          <Fcol span={100}>
            <NavLink href="/blog/" label="Blog" />
          </Fcol>
          <Fcol>
            <LocationAndSocial />
          </Fcol>
        </Frow>
      </Drawer>
    ),
  };
};
