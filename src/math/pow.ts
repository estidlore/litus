import { calc } from "./calc";

/**
 * Calculates the exponentiation of two quantities (vectors or scalars)
 * @param base Base quantity
 * @param exp Exponent quantity
 * @returns base raised to the power of exp
 */
export const pow = calc((base, exp) => Math.pow(base, exp));
