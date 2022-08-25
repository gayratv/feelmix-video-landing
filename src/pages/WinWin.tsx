import React from 'react';
import { Link } from 'react-router-dom';

export function WinWin() {
  return (
    <>
      <main>
        <h1>WinWin</h1>
        <h2>We are strong designe team!</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
