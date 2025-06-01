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
    const mid = Math.floor((a + b) / 2);
    const midVal = getVal(arr[mid]);
    if (midVal < target) {
      a = mid + 1;
    } else {
      b = mid;
    }
  }
  return a;
};
