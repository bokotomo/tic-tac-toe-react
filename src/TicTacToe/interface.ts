/**
 * TicTacToeの引数
 */
export interface Props {
  /** タイトル */
  readonly title?: string;
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
}
