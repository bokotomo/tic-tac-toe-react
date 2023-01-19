import React from 'react';
import styles from './style.module.css';
import { ItemType } from '../interface/item';

interface Props {
  /** アイテムをクリックした */
  readonly onClickItem: () => void;
  /** 先攻後攻か */
  readonly isType: ItemType;
}

/**
 * TicTacToeItem Compornent
 */
const TicTacToeItem: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <div className={styles.item} onClick={p.onClickItem}>
      {p.isType === ItemType.Me && 'O'}
      {p.isType === ItemType.Enemy && 'X'}
    </div>
  );
};

export default TicTacToeItem;
