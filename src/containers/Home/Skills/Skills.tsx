import { Fcol, Frow } from "react-forge-grid";
import style from "./Skills.module.scss";
import React from "react";
import { skillsInfo } from "src/config/skillsInfo";
import { customResponsive } from "src/utils/functions/responsiveUtils";
import { ImgLoader } from "src/common/react/ImgLoader";

export const Skills: React.FC = () => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <section className={style.Skills}>
      <h1>Skills</h1>
      <div className="contenido">
        <Frow hAlign="center">
          {skillsInfo.map((element, i) => (
            <Fcol {...customResponsive(12, 50)} key={`skillimage-${i}`}>
              <ImgLoader
                imgImport={element.img}
                range={{ from: "800w", to: "1200w" }}
              />
            </Fcol>
          ))}
        </Frow>
      </div>
    </section>
  );
};
