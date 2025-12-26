/**
 * Clamps a number between a minimum and maximum value
 *
 * @param x - The number to clamp
 * @param min - The lower bound
 * @param max - The upper bound
 * @returns The clamped value
 */
export const clamp = (x: number, min: number, max: number): number => {
  return Math.min(Math.max(x, min), max);
};
