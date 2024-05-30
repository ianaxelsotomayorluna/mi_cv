import style from "./LogoLink.module.scss";
import TextLogo from "src/assets/images/layout/navbar/logo.png?jsx";
import { ImgLoader } from "../../../../common/react/ImgLoader";

/**
 * LogoLink Component:  Descripción del comportamiento...
 */
export const LogoLink = () => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className={style["LogoLink"]}>
      <a href="/">
        <ImgLoader imgImport={TextLogo} range={{ from: "200w", to: "400w" }} />
      </a>
    </div>
  );
};
