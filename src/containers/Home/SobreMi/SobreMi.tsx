import style from "./SobreMi.module.scss";
import React from "react";

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
      <div className={style.contenido}>
        <div className={style.imagen}>
          <img
            src="src/assets/images/FotoPersonal/Foto.png"
            alt="FotoPersonal"
          />
        </div>
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
            <a href="/path/to/your/cv.pdf" className={style.boton}>
              CV en PDF
            </a>
            <a
              href="https://www.behance.net/ianaxesotomay"
              className={style.portafolio}
            >
              Portafolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
