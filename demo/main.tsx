import React from 'react';
import { createRoot } from 'react-dom/client';
import TicTacToe from '../src/TicTacToe';

const c = document.getElementById('app');
if (!c) throw new Error('not found element.');

createRoot(c).render(
  <div
    style={{
      width: 320,
      margin: 'auto',
    }}
  >
    <TicTacToe squareSize={3} title="Tic Tac Toe" />
  </div>
);
