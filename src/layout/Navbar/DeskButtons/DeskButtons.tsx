import React from "react";
import { Fcol } from "react-forge-grid";
import { NavLink } from "../common/NavLink/NavLink";
import { customResponsive } from "../../../utils/functions/responsiveUtils";

/**
 * DeskButtons Component:  Descripción del comportamiento...
 */
export const DeskButtons = () => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <>
      <Fcol {...customResponsive(30, 100)}></Fcol>
      <Fcol {...customResponsive(15, 50)}>
        <NavLink href="/" label="Inicio" />
      </Fcol>
      <Fcol {...customResponsive(15, 50)}>
        <NavLink href="/#sobre mi" label="sobre mi" />
      </Fcol>
      <Fcol {...customResponsive(15, 50)}>
        <NavLink href="/contacto" label="contacto" />
      </Fcol>
      <Fcol {...customResponsive(5, 50)}></Fcol>
    </>
  );
};
