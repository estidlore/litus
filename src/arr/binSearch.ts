/**
 * Binary search for insertion index in a sorted array using a custom accessor
 * @param arr Sorted array to search
 * @param target Value to search for
 * @param getVal Function to extract comparison value from each element
 * @param start Start index (inclusive)
 * @param end End index (exclusive)
 * @returns Index to insert target to maintain order
 */
export const binSearch = <T>(
  arr: T[],
  target: number,
  getVal: (el: T) => number,
  start = 0,
  end = arr.length
): number => {
  if (start < 0 || end > arr.length || start > end) {
    throw new Error("Invalid start or end of search");
  }
  let a = start;
  let b = end;
  while (a < b) {
    const mid = (a + b) >> 1;
    const midVal = getVal(arr[mid]);
    if (midVal < target) {
      a = mid + 1;
    } else {
      b = mid;
    }
  }
  return a;
};
