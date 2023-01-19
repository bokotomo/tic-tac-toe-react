import React from 'react';
import { createRoot } from 'react-dom/client';
import TicTacToe from '../../src/TicTacToe';
import { GameModeType } from '../../src/interface/game';

const c = document.getElementById('app');
if (!c) throw new Error('not found element.');

createRoot(c).render(
  <div
    style={{
      width: '90%',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <TicTacToe
      title="Tic Tac Toe (AI)"
      gameMode={GameModeType.AI}
      width="30%"
    />
    <TicTacToe
      title="Tic Tac Toe (FRIEND)"
      gameMode={GameModeType.FRIEND}
      width="30%"
    />
    <TicTacToe
      title="Tic Tac Toe (AI size: 5)"
      squareSize={5}
      gameMode={GameModeType.AI}
      width="30%"
    />
  </div>
);
