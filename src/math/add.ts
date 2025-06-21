import { calc } from "./calc";

/**
 * Calculates the sum of given quantities (vectors or scalars)
 * @param q Quantities to add
 * @returns Sum of the input quantities
 * @example
 * add([-4, 1, 0, 3], 5); // [1, 6, 5, 8]
 * add([1, 2], [3, 4]); // [4, 6]
 */
export const add = calc((...arr) => arr.reduce((acc, el) => acc + el, 0));
