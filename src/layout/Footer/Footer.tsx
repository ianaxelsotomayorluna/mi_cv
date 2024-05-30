import style from "./Footer.module.scss";
import { COMPANY_YEAR } from "src/config/socialInfo";

/**
 * Footer Component:  Descripción del comportamiento...
 */
export const Footer = () => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <footer className={style["Footer"]}>
      <h3>Este es el Foorer</h3>
      <div className="rights">
        {`© ${COMPANY_YEAR} Mendrive MX. Todos los derechos reservados. ¿Te gusta éste sitio? Revisa `}
        <a
          href="https://www.forgemytech.com/es"
          target="_blank"
          rel="noopener noreferrer"
        >
          forgemytech.com
        </a>
      </div>
    </footer>
  );
};
