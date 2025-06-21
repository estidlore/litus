/**
 * Transforms a function with spread arguments into one with array argument
 * @param fn Function accepting spread arguments
 * @returns Function accepting an array of arguments
 */
export const apply = <T extends unknown[], R>(
  fn: (...args: T) => R
): ((arg: T) => R) => {
  return (arg: T): R => fn.apply(undefined, arg);
};
