/**
 * Returns a random integer between two numbers
 * @param a Lower bound (inclusive)
 * @param b Upper bound (exclusive). Default: 0
 * @returns Random integer between a and b
 */
export const randInt = (a: number, b = 0): number => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("a and b must be integers");
  }
  return Math.floor(Math.random() * (b - a) + a);
};
