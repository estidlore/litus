import { calc } from "./calc";

/**
 * Calculates the exponentiation of two quantities (vectors or scalars)
 * @param base Base number or array
 * @param exp Exponent number or array
 * @returns base raised to the power of exp
 */
export const pow = calc((base, exp) => Math.pow(base, exp));
