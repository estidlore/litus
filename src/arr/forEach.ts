export type ForEachFn<T> = (val: T, idx: number, arr: ArrayLike<T>) => void;

/**
 * Calls the provided function for each element of an array-like object
 * @param arr - The array-like object to iterate over
 * @param fn - The function to execute for each element
 */
export const forEach = <T>(arr: ArrayLike<T>, fn: ForEachFn<T>): void => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr);
  }
};
