export type ReduceFn<T, U> = (
  acc: U,
  val: T,
  idx: number,
  arr: ArrayLike<T>
) => U;

/**
 * Applies a reducer function to each element accumulating a single value
 * @param arr - The array-like object to reduce
 * @param fn - The reducer function
 * @param initial - The initial accumulator value
 * @returns The accumulated value
 */
export const reduce = <T, U>(
  arr: ArrayLike<T>,
  fn: ReduceFn<T, U>,
  initial: U
): U => {
  let res = initial;
  for (let i = 0; i < arr.length; i++) {
    res = fn(res, arr[i], i, arr);
  }
  return res;
};
