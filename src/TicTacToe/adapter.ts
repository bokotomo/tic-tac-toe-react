import { Props } from './interface';

/**
 * 初期値
 */
const defaultConfig = {
  squareSize: 3,
  title: 'Tic Tac Toe',
  startButtonTitle: 'Game Start',
  textWinMe: 'You Win!',
  textWinEnemy: 'You Lose!',
  textDraw: 'Draw!',
};

/**
 * 整形
 */
interface AdapterReturn {
  readonly size: number;
  readonly title: string;
  readonly startTitle: string;
  readonly textWinMe: string;
  readonly textWinEnemy: string;
  readonly textDraw: string;
}

/**
 * adapter
 */
export const useAdapter = (p: Props): AdapterReturn => {
  const squareSize = p.squareSize || defaultConfig.squareSize;
  const size = squareSize < 2 ? 2 : squareSize;
  const title = p.title || defaultConfig.title;
  const startTitle = p.startButtonTitle || defaultConfig.startButtonTitle;
  const textWinMe = p.textWinMe || defaultConfig.textWinMe;
  const textWinEnemy = p.textWinEnemy || defaultConfig.textWinEnemy;
  const textDraw = p.textDraw || defaultConfig.textDraw;

  return {
    size,
    title,
    startTitle,
    textWinMe,
    textWinEnemy,
    textDraw,
  };
};
