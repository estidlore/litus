/**
 * Checks if a number is within a half-open range [a, b)
 * @param n The number to check
 * @param a Start of the range
 * @param b End of the range. Default: 0
 * @returns True if n is in [a, b), false otherwise
 */
export const inRange = (n: number, a: number, b = 0): boolean => {
  if (a > b) {
    return inRange(n, b, a);
  }
  return n >= a && n < b;
};
