/**
 * Transforms a function with array argument into one with spread arguments
 * @param fn Function accepting an array of arguments
 * @returns Function accepting spread arguments
 */
export const unapply = <T extends unknown[], R>(
  fn: (arg: T) => R
): ((...args: T) => R) => {
  return (...args: T): R => fn(args);
};
