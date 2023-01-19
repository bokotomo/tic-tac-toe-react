import { useEffect, useRef, useState } from 'react';
import { ItemType } from './interface/item';
import { random, transpose } from './math';

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
  const [isWinFirst, setIsWinFirst] = useState<boolean | null>(null);

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
    if (isWinFirst) {
      alert('先行の勝ちです！');
    } else {
      alert('後攻の勝ちです！');
    }
  }, [isGameEnd]);

  /**
   * ゲームを評価
   * 勝利のパターンは、(縦横の総数) + 対角線の数
   */
  const checkGame = (): boolean => {
    // 横
    const isXF = rows.some(line => line.every(l => l === ItemType.First));
    const isXS = rows.some(line => line.every(l => l === ItemType.Second));

    // 縦
    const ts = transpose(rows);
    const isYF = ts.some(line => line.every(l => l === ItemType.First));
    const isYS = ts.some(line => line.every(l => l === ItemType.Second));

    // 斜め
    const isZF = rows.every((line, i) => line[i] === ItemType.First);
    const isZS = rows.every((line, i) => line[i] === ItemType.Second);

    // 斜め
    const isZTF = rows.every(
      (line, i) => line[line.length - i - 1] === ItemType.First
    );
    const isZTS = rows.every(
      (line, i) => line[line.length - i - 1] === ItemType.Second
    );

    const isWinF = isXF || isYF || isZF || isZTF;
    const isWinS = isXS || isYS || isZS || isZTS;
    const isEnd = isWinF || isWinS;

    if (isEnd) {
      setIsGameEnd(true);
      setIsWinFirst(isWinF);
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

    setRow(useRow[0], useRow[1], ItemType.Second);

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
    setRow(row, hor, ItemType.First);
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
    setIsWinFirst(null);
  };

  /**
   * ゲームスタート
   */
  const onClickStart = (): void => {
    reset();

    const isFirst = random(1) === 0;
    if (isFirst) {
      alert('先行です');
    } else {
      alert('後攻です');
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
