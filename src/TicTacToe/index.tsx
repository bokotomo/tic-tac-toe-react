import React from 'react';
import styles from './style.module.css';
import { useHooks } from './hooks';
import TicTacToeItem from '../TicTacToeItem';

/**
 * TicTacToe Compornent
 */
const TicTacToe: React.FC = (): JSX.Element => {
  const { rows, onClickItem, onClickStart } = useHooks();
  const title = 'Tic Tac Toe';
  const startTitle = 'Game Start';

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>

      <div className={styles.itemWrapper}>
        {rows.map((line, i) => (
          <div key={i} className={styles.items}>
            {line.map((v, j) => (
              <TicTacToeItem
                key={j}
                onClickItem={() => onClickItem(i, j)}
                isType={v}
              />
            ))}
          </div>
        ))}
      </div>

      <div className={styles.spacer} />

      <div className={styles.buttonGame} onClick={onClickStart}>
        {startTitle}
      </div>
    </div>
  );
};

export default TicTacToe;
