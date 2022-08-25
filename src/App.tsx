import React from 'react';
import styl from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WinWin } from './pages/WinWin';
import { FooterNav } from './components/FooterNav';
import { HeaderNav } from './components/HeaderNav';
import { Showreels } from './pages/Showreels';

function App() {
  return (
    <div className={styl.App}>
      {/* ROW 1*/}
      <div></div>
      <HeaderNav />
      <div></div>
      {/* ROW 1 end */}

      {/* ROW 2*/}
      <div className={styl.expandContent}></div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="showreels" element={<Showreels />} />
          <Route path="winwin" element={<WinWin />} />
        </Routes>
      </div>
      <div></div>
      {/* ROW 2 END*/}

      {/* ROW 3*/}
      <div></div>
      <FooterNav />
      <div></div>
      {/* ROW 3 end */}
    </div>
  );
}

export default App;
