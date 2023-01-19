import { ItemType, GameEndType } from '../interface/game';
import { random, transpose } from '../modules/math';

interface TicTacToeReturn {
  readonly isEnd: boolean;
  readonly winner: GameEndType;
}

/**
 * ゲームを評価
 * 勝利のパターンは、(縦横の総数) + 対角線の数
 */
export const checkTicTacToe = (rows: ItemType[][]): TicTacToeReturn => {
  // 横
  const isXM = rows.some(line => line.every(l => l === ItemType.Me));
  const isXE = rows.some(line => line.every(l => l === ItemType.Enemy));

  // 縦
  const ts = transpose(rows);
  const isYM = ts.some(line => line.every(l => l === ItemType.Me));
  const isYE = ts.some(line => line.every(l => l === ItemType.Enemy));

  // 斜め
  const isZM = rows.every((line, i) => line[i] === ItemType.Me);
  const isZE = rows.every((line, i) => line[i] === ItemType.Enemy);

  // 斜め
  const isZTM = rows.every(
    (line, i) => line[line.length - i - 1] === ItemType.Me
  );
  const isZTE = rows.every(
    (line, i) => line[line.length - i - 1] === ItemType.Enemy
  );

  const isWinM = isXM || isYM || isZM || isZTM;
  const isWinE = isXE || isYE || isZE || isZTE;
  const isDraw =
    !isWinM && !isWinE && rows.flat().every(r => r !== ItemType.Unset);
  const isEnd = isWinM || isWinE || isDraw;

  const winner = isWinM
    ? GameEndType.WinMe
    : isDraw
    ? GameEndType.Draw
    : GameEndType.WinEnemy;

  return { isEnd, winner };
};

/**
 * AIのターンで置く場所を取得
 */
export const getAIRow = (rows: ItemType[][]): number[] => {
  const unsetRowsMulti: (number[] | null)[][] = rows.map((line, i) =>
    line.map((l, j) => {
      if (l === ItemType.Unset) return [i, j];
      return null;
    })
  );
  const unsetRows = unsetRowsMulti.flat();
  const canUseRows = unsetRows.filter(r => !!r) as number[][];
  const index = random(canUseRows.length - 1);

  return canUseRows[index];
};
