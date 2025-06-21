/**
 * Creates an array of size `n`, filling each element using the map function
 * @param n Size of the array to create
 * @param mapFn Function that maps each index to an array element
 * @returns Array of mapped values
 */
export const from = <T>(n: number, mapFn: (i: number) => T): T[] => {
  const res = Array<T>(n);
  let i = n;
  while (--i >= 0) {
    res[i] = mapFn(i);
  }
  return res;
};
