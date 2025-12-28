import { calc } from "./calc";

/**
 * Calculates the subtraction of two quantities (vectors or scalars)
 * @param a Minuend number or array
 * @param b Subtrahend number or array
 * @returns Subtraction of `b` from `a`
 */
export const subtract = calc((a, b) => a - b);
