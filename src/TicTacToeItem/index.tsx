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
}

/**
 * TicTacToeItem Compornent
 */
const TicTacToeItem: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <div
      className={styles.item}
      onClick={p.onClickItem}
      style={{ width: p.width }}
    >
      {p.isType === ItemType.Me && (
        <Circle style={{ width: '42%' }} color="white" />
      )}
      {p.isType === ItemType.Enemy && (
        <Xmark style={{ width: '42%' }} color="white" />
      )}
    </div>
  );
};

export default TicTacToeItem;
