import React from 'react';
import styl from './FooterNav.module.scss';
import { Link } from 'react-router-dom';

export const FooterNav = () => (
  <nav className={styl.nav}>
    <p>Hello FeelMix.pro</p>
    <ul className={styl.menuCenter}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/showreels">SHOWREELS</Link>
      </li>
      <li>
        <Link to="/winwin">Win Win</Link>
      </li>
      <li>CONTACTS</li>
    </ul>
    <p>Whatsapp US</p>
  </nav>
);
