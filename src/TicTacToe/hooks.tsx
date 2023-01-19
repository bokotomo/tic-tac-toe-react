import { useEffect, useRef, useState } from 'react';
import { ItemType, GameEndType } from '../interface/item';
import { random, transpose } from '../modules/math';

/** 正方形の列の数 */
const defaultSize = 3;

/**
 *
 */
export const useHooks = () => {
  const isFirst = useRef(false);
  const [rows, setRows] = useState<ItemType[][]>([]);
  const [turnNumber, setTurnNumber] = useState<number>(0);
  /** 先行か後攻か */
  const [isFirstTurn, setIsFirstTurn] = useState<boolean>(false);
  /** ゲームが終わったか */
  const [isGameEnd, setIsGameEnd] = useState<boolean>(false);
  /** 勝者 */
  const [winner, setWinner] = useState<GameEndType | null>(null);

  /**
   * 配列の追加
   */
  const setArrayRows = (): void => {
    const r = [];
    for (let i = 0; i < defaultSize; i++) {
      r.push(new Array(defaultSize).fill(ItemType.Unset));
    }
    setRows(r);
  };

  /**
   * 初期値のセット
   */
  useEffect(() => {
    if (isFirst.current) return;
    isFirst.current = true;

    setArrayRows();
  }, []);

  /**
   * ターン
   */
  useEffect(() => {
    if (turnNumber === 0) return;
    if (checkGame()) return;
    if (isAITurn(isFirstTurn, turnNumber)) runAITurn();
  }, [turnNumber]);

  /**
   * ゲーム終了イベント
   */
  useEffect(() => {
    if (!isGameEnd) return;
    switch (winner) {
      case GameEndType.WinMe:
        alert('あなたの勝ちです！');
        break;
      case GameEndType.WinEnemy:
        alert('相手の勝ちです！');
        break;
      case GameEndType.Draw:
        alert('引き分けです!');
        break;
    }
  }, [isGameEnd]);

  /**
   * ゲームを評価
   * 勝利のパターンは、(縦横の総数) + 対角線の数
   */
  const checkGame = (): boolean => {
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

    if (isEnd) {
      setIsGameEnd(true);
      const winner = isWinM
        ? GameEndType.WinMe
        : isDraw
        ? GameEndType.Draw
        : GameEndType.WinEnemy;
      setWinner(winner);
    }

    return isEnd;
  };

  /**
   * ターン判別
   */
  const isAITurn = (isUserFirst: boolean, t: number): boolean =>
    isUserFirst ? t % 2 === 0 : t % 2 === 1;

  /**
   * AIのターン
   */
  const runAITurn = (): void => {
    const unsetRowsMulti: (number[] | null)[][] = rows.map((line, i) =>
      line.map((l, j) => {
        if (l === ItemType.Unset) return [i, j];
        return null;
      })
    );
    const unsetRows = unsetRowsMulti.flat();
    const canUseRows = unsetRows.filter(r => !!r) as number[][];
    const index = random(canUseRows.length - 1);
    const useRow = canUseRows[index];

    setRow(useRow[0], useRow[1], ItemType.Enemy);

    setTurnNumber(turnNumber + 1);
  };

  /**
   * 配列にセットする
   */
  const setRow = (row: number, hor: number, userType: ItemType): void => {
    setRows(
      rows.map((line, i) =>
        line.map((l, j) => {
          if (i === row && j === hor) return userType;
          return l;
        })
      )
    );
  };

  /**
   * 配列にセットする
   */
  const canSetRow = (row: number, hor: number): boolean =>
    rows[row][hor] === ItemType.Unset;

  /**
   * アイテムをクリックした
   */
  const onClickItem = (row: number, hor: number): void => {
    if (turnNumber === 0) return;
    if (isGameEnd) return;
    if (!canSetRow(row, hor)) return;
    setRow(row, hor, ItemType.Me);
    setTurnNumber(turnNumber + 1);
  };

  /**
   * ゲームリセット
   */
  const reset = (): void => {
    setRows(rows.map(line => line.fill(ItemType.Unset)));
    setTurnNumber(0);
    setIsFirstTurn(false);
    setIsGameEnd(false);
    setWinner(null);
  };

  /**
   * ゲームスタート
   */
  const onClickStart = (): void => {
    reset();

    const isFirst = random(1) === 0;
    if (isFirst) {
      alert('あなたが先行です!');
    } else {
      alert('あなたが後攻です!');
    }
    setIsFirstTurn(isFirst);
    setTurnNumber(1);
  };

  return {
    rows,
    setRows,
    onClickItem,
    onClickStart,
  };
};
