/**
 * 配列に入る値の種類
 */
export enum ItemType {
  Unset = 0,
  Me = 1,
  Enemy = 2,
}

/**
 * ゲームエンド
 */
export enum GameEndType {
  Draw = 1,
  WinMe = 2,
  WinEnemy = 3,
}

/**
 * ゲームモード
 */
export enum GameModeType {
  AI = 1,
  FRIEND = 2,
  ULTRA = 3,
}
