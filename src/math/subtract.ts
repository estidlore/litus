import { calc } from "./calc";

/**
 * Calculates the subtraction of two quantities (vectors or scalars)
 * @param a Minuend quantity
 * @param b Subtrahend quantity
 * @returns Subtraction of `b` from `a`
 */
export const subtract = calc((a, b) => a - b);
