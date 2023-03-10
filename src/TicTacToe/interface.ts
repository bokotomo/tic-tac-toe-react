import { CSSProperties } from 'react';
import { GameModeType } from '../interface/game';

/**
 * TicTacToeの引数
 */
export interface Props {
  /** タイトル */
  readonly title?: string;
  /** ゲームモード */
  readonly gameMode?: GameModeType;
  /** 全体の横幅 */
  readonly width?: string | number;
  /** 開始ボタンタイトル */
  readonly startButtonTitle?: string;
  /** 縦横の列数 */
  readonly squareSize?: number;
  /** 勝利テキスト */
  readonly textWinMe?: string;
  /** 敗北テキスト */
  readonly textWinEnemy?: string;
  /** 引き分けテキスト */
  readonly textDraw?: string;
  /** アイテムの背景色 */
  readonly itemColor?: string;
  /** アイテムのマークの色 */
  readonly itemMarkColor?: string;
  /** アイテムのCSS */
  readonly itemStyle?: CSSProperties;
  /** ボタンのCSS */
  readonly buttonStyle?: CSSProperties;
}
