import { useEffect, useRef, useState } from 'react';
import { ItemType, GameEndType } from '../interface/item';
import { random } from '../modules/math';
import { checkTicTacToe, getAIRow } from './logic';

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
    if (checkGameEnd()) return;
    if (isAITurn(isFirstTurn, turnNumber)) runAITurn();
  }, [turnNumber]);

  /**
   * ゲーム終了イベント
   */
  useEffect(() => {
    if (!isGameEnd) return;
    switch (winner) {
      case GameEndType.WinMe:
        alert('「あなた」の勝ちです！');
        break;
      case GameEndType.WinEnemy:
        alert('「相手」の勝ちです！');
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
  const checkGameEnd = (): boolean => {
    const { isEnd, winner } = checkTicTacToe(rows);
    if (isEnd) {
      setIsGameEnd(true);
      setWinner(winner);
    }
    return isEnd;
  };

  /**
   * ターン判別
   */
  const isAITurn = (isFirst: boolean, t: number): boolean =>
    isFirst ? t % 2 === 0 : t % 2 === 1;

  /**
   * AIのターン
   */
  const runAITurn = (): void => {
    const useRow = getAIRow(rows);
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
      alert('あなたが「先攻」です!');
    } else {
      alert('あなたが「後攻」です!');
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