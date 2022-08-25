import React from 'react';
import { MainLogoSvg } from './MainLogo';
import styl from './HeaderNav.module.scss';

export const HeaderNav = () => (
  <nav className={styl.nav}>
    <MainLogoSvg className={styl.MainLogoSvg} />
    <p className={styl.p}> Download presentation</p>
  </nav>
);
