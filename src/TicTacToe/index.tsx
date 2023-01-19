import React from 'react';
import s from './style.module.css';
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
    width,
    startButtonTitle,
    textWinMe,
    textWinEnemy,
    textDraw,
    itemColor,
    itemMarkColor,
    buttonStyle,
    itemStyle,
  } = useAdapter(p);
  const { rows, winner, onClickItem, onClickStart } = useHooks(size);

  return (
    <div className={s.wrapper}>
      {p.title && (
        <>
          <div className={s.title}>{p.title}</div>
          <div className={s.spacer} />
        </>
      )}

      <div>
        {rows.map((line, i) => (
          <div key={i} className={s.items}>
            {line.map((v, j) => (
              <TicTacToeItem
                key={j}
                onClickItem={() => onClickItem(i, j)}
                isType={v}
                width={width}
                itemColor={itemColor}
                itemMarkColor={itemMarkColor}
                style={itemStyle}
              />
            ))}
          </div>
        ))}
      </div>

      <div className={s.spacer} />

      <div className={s.buttonGame} onClick={onClickStart} style={buttonStyle}>
        {startButtonTitle}
      </div>

      {winner && (
        <>
          <div className={s.spacer} />

          <div className={s.title}>
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
