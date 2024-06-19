import { Fcol, Frow } from "react-forge-grid";
import style from "./Bannerprincipal.module.scss";
import { customResponsive } from "src/utils/functions/responsiveUtils";

/**
 * Bannerprincipal Component:  Descripción del comportamiento...
 */
export const Bannerprincipal = () => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className={style["Bannerprincipal"]}>
      <Frow hAlign="center" vAlign="middle">
        <Fcol {...customResponsive(50, 100)}>
          <div className={style.info}>
            <h1>Ian Axel </h1>
            <h1>Sotomayor Luna</h1>
            <p>
              Soy un diseñador gráfico y UX/UI en
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
          <div className={style.imagen}>
            <img src="src/assets/images/Banner1/ImagenLogo.png" alt="Banner" />
          </div>
        </Fcol>
      </Frow>
      <img />
    </div>
  );
};
