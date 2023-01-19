/**
 * 0 ~ max
 */
export const random = (max: number): number =>
  Math.floor(Math.random() * (max + 1));

/**
 * 転置
 */
export const transpose = (arr: number[][]): number[][] => {
  if (arr.length === 0) return [];
  return arr[0].map((_, c) => arr.map(r => r[c]));
};
