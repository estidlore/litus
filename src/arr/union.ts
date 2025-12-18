/**
 * Creates a set containing unique values from all provided arrays
 * @param arrs Arrays to union
 * @returns Set of unique values
 */
export const union = <T>(...arrs: T[][]): Set<T> => {
  const res = new Set<T>();
  for (let i = 0; i < arrs.length; i++) {
    const arr = arrs[i];
    for (let j = 0; j < arr.length; j++) {
      res.add(arr[j]);
    }
  }
  return res;
};
