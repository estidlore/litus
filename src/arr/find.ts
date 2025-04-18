export const find = <T>(
  arr: T[],
  predicate: (val: T, idx: number, obj: T[]) => boolean,
  from = 0,
  to = arr.length
): T | undefined => {
  for (let i = from; i < to; i++) {
    if (predicate(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};
