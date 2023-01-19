import React from 'react';
import styles from './style.module.css';
import { ItemType } from '../interface/item';
import Circle from './svg/Circle';
import Xmark from './svg/Xmark';

interface Props {
  /** アイテムをクリックした */
  readonly onClickItem: () => void;
  /** 先攻後攻か */
  readonly isType: ItemType;
  /** 横幅 */
  readonly width: string;
  /** 背景色 */
  readonly itemColor: string;
  /** マークの色 */
  readonly itemMarkColor: string;
}

/**
 * TicTacToeItem Compornent
 */
const TicTacToeItem: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <div
      className={styles.item}
      onClick={p.onClickItem}
      style={{
        width: p.width,
        background: p.itemColor,
      }}
    >
      {p.isType === ItemType.Me && (
        <Circle style={{ width: '42%' }} color={p.itemMarkColor} />
      )}
      {p.isType === ItemType.Enemy && (
        <Xmark style={{ width: '42%' }} color={p.itemMarkColor} />
      )}
    </div>
  );
};

export default TicTacToeItem;
