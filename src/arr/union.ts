/**
 * Creates a set containing unique values from all provided arrays
 * @param arrs Arrays to union
 * @returns Set of unique values
 */
export const union = <T>(...arrs: T[][]): Set<T> => {
  return new Set(arrs.flat(1));
};
