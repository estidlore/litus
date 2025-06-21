/**
 * Returns a random integer between two numbers, inclusive
 * Handles both ascending and descending ranges, as well as floating point inputs
 * @param a Lower or upper bound (inclusive). Default: 1
 * @param b Upper or lower bound (inclusive). Default: 0
 * @returns Random integer between a and b, inclusive
 */
export const randInt = (a = 1, b = 0): number => {
  if (a > b) {
    return randInt(b, a);
  }
  const low = Math.ceil(a);
  const range = Math.floor(b) - low + 1;
  return Math.floor(Math.random() * range + low);
};
