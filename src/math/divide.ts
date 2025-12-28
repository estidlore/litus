import { calc } from "./calc";

/**
 * Calculates the division of two quantities (vectors or scalars)
 * @param a Dividend number or array
 * @param b Divisor number or array
 * @returns Division of the input quantities
 * @example
 * divide([-4, 1, 0, 3], 2); // [-2, 0.5, 0, 1.5]
 * divide([1, 2], [3, 4]);   // [1 / 3, 0.5]
 */
export const divide = calc((a, b) => a / b);
