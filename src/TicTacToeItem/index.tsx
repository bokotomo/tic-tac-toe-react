import React from 'react';
import s from './style.module.css';
import { ItemType } from '../interface/game';
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
  /** スタイル */
  readonly style?: React.CSSProperties;
}

/**
 * TicTacToeItem Compornent
 */
const TicTacToeItem: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <div
      className={s.item}
      onClick={p.onClickItem}
      style={{
        width: p.width,
        background: p.itemColor,
        ...p.style,
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
