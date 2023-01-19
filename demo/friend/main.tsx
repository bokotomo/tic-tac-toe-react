import React from 'react';
import { createRoot } from 'react-dom/client';
import TicTacToe from '../../src/TicTacToe';
import { GameModeType } from '../../src/interface/game';

const c = document.getElementById('app');
if (!c) throw new Error('not found element.');

/**
 * FRIEND MODE
 */
createRoot(c).render(
  <div
    style={{
      width: 320,
      margin: 'auto',
    }}
  >
    <TicTacToe title="Tic Tac Toe" gameMode={GameModeType.FRIEND} />
  </div>
);
