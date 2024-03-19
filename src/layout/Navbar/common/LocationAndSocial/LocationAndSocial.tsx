import React from "react";
import style from "./LocationAndSocial.module.scss";
import { Fcol, Frow } from "react-forge-grid";
import { Icon } from "@iconify/react";
import { customResponsive } from "../../../../utils/functions/responsiveUtils";
import LocationImg from "src/assets/images/layout/navbar/location.png";
import { ImgLoader } from "../../../../common/react/ImgLoader";

/**
 * LocationAndSocial Component:  Descripción del comportamiento...
 */
export const LocationAndSocial = () => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Frow
      vAlign="middle"
      hAlign="center"
      className={style["LocationAndSocial"]}
    >
      <Fcol span={10}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Icon icon="mingcute:facebook-fill" />
        </a>
      </Fcol>
      <Fcol span={10}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Icon icon="ri:twitter-x-fill" />
        </a>
      </Fcol>
      <Fcol span={10}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Icon icon="iconoir:instagram" />
        </a>
      </Fcol>
      <Fcol span={10}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Icon icon="ri:youtube-fill" />
        </a>
      </Fcol>

      <Fcol {...customResponsive(60, 50)}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <div className="location">
            <ImgLoader imgImport={LocationImg} />
            <span>Ubicación</span>
          </div>
        </a>
      </Fcol>
    </Frow>
  );
};
