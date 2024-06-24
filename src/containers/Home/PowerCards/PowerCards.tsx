import style from "./PowerCards.module.scss";
import { ImgLoader } from "src/common/react/ImgLoader";
import { Fcol, Frow } from "react-forge-grid";
import { basicResponsive } from "src/utils/functions/responsiveUtils";
import Img1 from "src/assets/images/Home/PowerCards/Card1.png?jsx";
import Img2 from "src/assets/images/Home/PowerCards/Card2.png?jsx";
import Img3 from "src/assets/images/Home/PowerCards/Card3.png?jsx";
import { ScrollAnimate } from "src/common/react/ScrollAnimate/ScrollAnimate";
import { useStore } from "@nanostores/react";
import { FStore } from "src/store/config/rootAtom";
import { useBoolean } from "src/utils/hooks/useBoolean";

/**
 * PowerCards Component:  Descripción del comportamiento...
 */
export const PowerCards = () => {
  // -----------------------CONSTS, HOOKS, STATES
  useBoolean();
  const { screenInfo } = useStore(FStore, { keys: ["screenInfo"] });
  const isMobile = screenInfo.isMobile;
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className={style["PowerCards"]}>
      <h2>Trayectoria</h2>
      <Frow hAlign="center">
        <Fcol {...basicResponsive(33)}>
          <ScrollAnimate always delay={0}>
            <ImgLoader imgImport={Img1} range={{ from: "400w", to: "400w" }} />
          </ScrollAnimate>
        </Fcol>
        <Fcol {...basicResponsive(33)}>
          <ScrollAnimate always delay={isMobile ? 0 : 300}>
            <ImgLoader imgImport={Img2} range={{ from: "400w", to: "400w" }} />
          </ScrollAnimate>
        </Fcol>
        <Fcol {...basicResponsive(33)}>
          <ScrollAnimate always delay={isMobile ? 0 : 600}>
            <ImgLoader imgImport={Img3} range={{ from: "400w", to: "400w" }} />
          </ScrollAnimate>
        </Fcol>
      </Frow>
    </div>
  );
};
