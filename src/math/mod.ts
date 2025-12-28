import { calc } from "./calc";

/**
 * Calculates the modulo of two quantities (vectors or scalars)
 * @param x Dividend number or array
 * @param modulo Divisor number or array
 * @returns Remainder of division
 * @example
 * mod(5, 3); // 2
 * mod([2, 3, 4], 3); // [2, 0, 1]
 * mod([4, 5], [2, 3]); // [0, 2]
 */
export const mod = calc((x, modulo) => {
  const m = Math.abs(modulo);
  return ((x % m) + m) % m;
});
