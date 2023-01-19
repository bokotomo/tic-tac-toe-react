import React from 'react';
import styles from './TicTacToe.module.css';
import { useHooks } from './hooks';
import TicTacToeItem from './TicTacToeItem';

/**
 *
 */
const TicTacToe: React.FC = (): JSX.Element => {
  const { rows, onClickItem, onClickStart } = useHooks();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Tic Tac Toe</div>

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
        Game Start
      </div>
    </div>
  );
};

export default TicTacToe;
