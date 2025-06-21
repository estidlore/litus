import { round } from "./round";

/**
 * Compares if two numbers are approximately equal using a custom precision
 * @param a First number to compare
 * @param b Second number to compare
 * @param precision Number of decimal places to consider. Default: 4
 * @returns True if numbers are approximately equal, false otherwise
 */
export const aprox = (a: number, b: number, precision = 4): boolean => {
  return round(a, precision) === round(b, precision);
};
