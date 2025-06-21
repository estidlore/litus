/**
 * Sorts an array in-place based on a mapping function
 * @param arr Array to sort
 * @param mapFn Function to map each element to a sortable value
 * @returns Sorted array in-place
 */
export const sort = <T>(arr: T[], mapFn: (el: T) => number | string): T[] => {
  const mapped = arr.map((el) => [mapFn(el), el] as const);
  mapped.sort(([a], [b]) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  mapped.forEach(([, el], i) => {
    arr[i] = el;
  });
  return arr;
};
