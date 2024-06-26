import { Fcol, Frow } from "react-forge-grid";
import style from "./Bannerprincipal.module.scss";
import { customResponsive } from "src/utils/functions/responsiveUtils";
import Bagheera from "src/assets/images/Banner1/ImagenLogo.png?jsx";
import { ImgLoader } from "src/common/react/ImgLoader";

/**
 * Bannerprincipal Component:  Descripción del comportamiento...
 */
export const Bannerprincipal = () => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div id="inicio" className={style.Bannerprincipal}>
      <Frow hAlign="center" vAlign="middle">
        <Fcol {...customResponsive(50, 100)}>
          <div className={style.info}>
            <h1>Ian Axel </h1>
            <h1>Sotomayor Luna</h1>
            <p>
              Soy un diseñador gráfico y UX/UI en{" "}
              <a href="https://forgemytech.com">forgemytech.com</a>
            </p>
            <p>
              Apasionado por la innovación y el aprendizaje constante. Cada día,
              busco perfeccionar mis habilidades y estar al tanto de las últimas
              tecnologías para ofrecer soluciones creativas y efectivas.
            </p>
          </div>
        </Fcol>
        <Fcol {...customResponsive(50, 100)}>
          <div className={style["image"]}>
            <ImgLoader
              imgImport={Bagheera}
              range={{ from: "800w", to: "1200w" }}
            />
          </div>
        </Fcol>
      </Frow>
    </div>
  );
};
