import { Fcol, Frow } from "react-forge-grid";
import style from "./SobreMi.module.scss";
import React from "react";
import { customResponsive } from "src/utils/functions/responsiveUtils";

/**
 * SobreMi Component:  Descripción del comportamiento...
 */
export const SobreMi = () => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <section className={style.sobreMi}>
      <Frow hAlign="center" vAlign="middle">
        <Fcol {...customResponsive(50, 100)}>
          <div className={style.imagen}>
            <img
              src="src/assets/images/FotoPersonal/Foto.png"
              alt="FotoPersonal"
            />
          </div>
        </Fcol>
        <Fcol {...customResponsive(50, 100)}>
          <div className={style.texto}>
            <h1>Sobre mi</h1>
            <p>
              Actualmente buscando crecimiento personal y tecnologías
              interesantes, por el momento prefiero trabajo remoto.
            </p>
            <p>
              Soy alguien que siempre busca estar actualizado, siempre
              comprometido con resultados y calidad proveyendo la mejor
              experiencia para todos.
            </p>
            <p>
              Me preocupo por mi equipo, los clientes, el usuario final y la
              compañía donde trabajo.
            </p>
            <div className={style.botones}>
              <a
                href="src\assets\CV\IanCV.pdf"
                className={style.boton}
                target="_blank"
                rel="noopener noreferrer"
              >
                CV en PDF
              </a>
              <a
                href="https://www.behance.net/ianaxesotomay"
                className={style.portafolio}
                target="_blank"
                rel="noopener noreferrer"
              >
                Portafolio
              </a>
            </div>
          </div>
        </Fcol>
      </Frow>
    </section>
  );
};
