import React from 'react';
import styles from './style.module.css';
import { useHooks } from './hooks';
import { useAdapter } from './adapter';
import { Props } from './interface';
import TicTacToeItem from '../TicTacToeItem';
import { GameEndType } from '../interface/item';

/**
 * TicTacToe Compornent
 */
const TicTacToe: React.FC<Props> = (p: Props): JSX.Element => {
  const {
    size,
    title,
    startTitle,
    textWinMe,
    textWinEnemy,
    textDraw,
    itemColor,
    itemMarkColor,
  } = useAdapter(p);
  const { rows, winner, onClickItem, onClickStart } = useHooks(size);
  const width = 100 / size - 1 + '%';

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>

      <div className={styles.spacer} />

      <div>
        {rows.map((line, i) => (
          <div key={i} className={styles.items}>
            {line.map((v, j) => (
              <TicTacToeItem
                key={j}
                onClickItem={() => onClickItem(i, j)}
                isType={v}
                width={width}
                itemColor={itemColor}
                itemMarkColor={itemMarkColor}
              />
            ))}
          </div>
        ))}
      </div>

      <div className={styles.spacer} />

      <div className={styles.buttonGame} onClick={onClickStart}>
        {startTitle}
      </div>

      {winner && (
        <>
          <div className={styles.spacer} />

          <div className={styles.title}>
            {winner === GameEndType.WinMe && <>{textWinMe}</>}
            {winner === GameEndType.WinEnemy && <>{textWinEnemy}</>}
            {winner === GameEndType.Draw && <>{textDraw}</>}
          </div>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
