import React from 'react';
import style from './Navbar.module.scss';
import { useStore } from '@nanostores/react';
import { FStore } from '../../store/config/rootAtom';
import { LogoLink, exposeSrc } from './common/LogoLink/LogoLink';

import TextLogo from 'src/assets/nested/prueba.png?jsx';
import { ImgLoader } from '../../common/react/ImgLoader';

const imgProps = exposeSrc(TextLogo);
/**
 * Navbar Component:  Descripción del comportamiento...
 */
export const Navbar = () => {
  // -----------------------CONSTS, HOOKS, STATES
  const { screenInfo } = useStore(FStore, { keys: ['screenInfo'] });
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <header className={style.Navbar}>
      <LogoLink />
      <div>
        <ImgLoader imgImport={TextLogo} />
      </div>
    </header>
  );
};
