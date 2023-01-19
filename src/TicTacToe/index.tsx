import React from 'react';
import styles from './style.module.css';
import { useHooks } from './hooks';
import TicTacToeItem from '../TicTacToeItem';

/** 初期値 */
const defaultConfig = {
  squareSize: 3,
  title: 'Tic Tac Toe',
  startButtonTitle: 'Game Start',
};

interface Props {
  /** タイトル */
  readonly title?: string;
  /** 開始ボタンタイトル */
  readonly startButtonTitle?: string;
  /** 縦横の列数 */
  readonly squareSize?: number;
}

/**
 * TicTacToe Compornent
 */
const TicTacToe: React.FC<Props> = (p: Props): JSX.Element => {
  const squareSize = p.squareSize || defaultConfig.squareSize;
  const size = squareSize < 2 ? 2 : squareSize;
  const { rows, onClickItem, onClickStart } = useHooks(size);
  const title = p.title || defaultConfig.title;
  const startTitle = p.startButtonTitle || defaultConfig.startButtonTitle;
  const width = 100 / size - 1 + '%';

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>

      <div>
        {rows.map((line, i) => (
          <div key={i} className={styles.items}>
            {line.map((v, j) => (
              <TicTacToeItem
                key={j}
                onClickItem={() => onClickItem(i, j)}
                isType={v}
                width={width}
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
