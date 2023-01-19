import React from 'react';
import styles from './TicTacToe.module.css';
import { ItemType } from './interface/item';

interface Props {
  readonly onClickItem: () => void;
  readonly isType: ItemType;
}

/**
 *
 */
const TicTacToeItem: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <div className={styles.item} onClick={p.onClickItem}>
      {p.isType === ItemType.First && 'O'}
      {p.isType === ItemType.Second && 'X'}
    </div>
  );
};

export default TicTacToeItem;
