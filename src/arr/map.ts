export type MapFn<T, U> = (el: T, idx: number, arr: ArrayLike<T>) => U;

/**
 * Creates an array with the results of calling a mapping function on each
 * element
 *
 * @param arr - The array-like object to map over
 * @param fn - Function to apply to each element
 * @returns A new array with the results of calling `fn` on each element
 */
export const map = <T, U>(arr: ArrayLike<T>, fn: MapFn<T, U>): U[] => {
  const res = Array<U>(arr.length);
  for (let i = 0; i < arr.length; i++) {
    res[i] = fn(arr[i], i, arr);
  }
  return res;
};
