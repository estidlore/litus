import { calc } from "./calc";

/**
 * Calculates the multiplication of given quantities (vectors or scalars)
 * @param q Quantities to multiply
 * @returns Product of the input quantities
 * @example
 * multiply([-4, 1, 0, 3], 3); // => [-12, 3, 0, 9]
 * multiply([1, 2], [3, 4]); // => [3, 8]
 */
export const multiply = calc((...arr) => arr.reduce((acc, el) => acc * el, 1));
