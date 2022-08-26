import React from 'react';
import { Link } from 'react-router-dom';
import styl from './Home.module.scss';

export function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
      </main>

      <button className={styl.button}>
        <p>Нажмите на кнопку</p>
        <Link to="/showreels">SHOWREELS</Link>
      </button>
    </>
  );
}
