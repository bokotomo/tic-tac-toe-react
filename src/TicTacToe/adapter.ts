import { CSSProperties } from 'react';
import { Props } from './interface';
import { GameModeType } from '../interface/game';

/**
 * 初期値
 */
const defaultConfig = {
  squareSize: 3,
  startButtonTitle: 'Game Start',
  textWinMe: 'You Win!',
  textWinEnemy: 'You Lose!',
  textWinO: 'O Win!',
  textWinX: 'X Win!',
  textDraw: 'Draw!',
  itemColor: 'linear-gradient(135deg, #5258aa, #456db5)',
  itemMarkColor: 'white',
  buttonStyle: {},
  itemStyle: {},
  gameMode: GameModeType.AI,
};

/**
 * 整形
 */
interface AdapterReturn {
  readonly size: number;
  readonly width: string;
  readonly startButtonTitle: string;
  readonly textWinMe: string;
  readonly textWinEnemy: string;
  readonly textDraw: string;
  readonly itemColor: string;
  readonly itemMarkColor: string;
  readonly buttonStyle: CSSProperties;
  readonly itemStyle: CSSProperties;
  readonly gameMode: GameModeType;
}

/**
 * adapter
 */
export const useAdapter = (p: Props): AdapterReturn => {
  const gameMode = p.gameMode || defaultConfig.gameMode;
  const squareSize = p.squareSize || defaultConfig.squareSize;
  const size = squareSize < 2 ? 2 : squareSize;
  const width = 100 / size - 1 + '%';
  const startButtonTitle = p.startButtonTitle || defaultConfig.startButtonTitle;
  const textWinMe = (): string => {
    if (gameMode === GameModeType.AI)
      return p.textWinMe || defaultConfig.textWinMe;
    return p.textWinMe || defaultConfig.textWinO;
  };
  const textWinEnemy = (): string => {
    if (gameMode === GameModeType.AI)
      return p.textWinEnemy || defaultConfig.textWinEnemy;
    return p.textWinMe || defaultConfig.textWinX;
  };
  const textDraw = p.textDraw || defaultConfig.textDraw;
  const itemColor = p.itemColor || defaultConfig.itemColor;
  const itemMarkColor = p.itemMarkColor || defaultConfig.itemMarkColor;
  const buttonStyle = p.buttonStyle || defaultConfig.buttonStyle;
  const itemStyle = p.itemStyle || defaultConfig.itemStyle;

  return {
    size,
    width,
    startButtonTitle,
    textWinMe: textWinMe(),
    textWinEnemy: textWinEnemy(),
    textDraw,
    itemColor,
    itemMarkColor,
    buttonStyle,
    itemStyle,
    gameMode,
  };
};
