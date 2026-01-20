/**
 * Returns elements from the first array excluding elements in the second array
 * @param arr - The primary array
 * @param arr2 - The values to exclude
 * @returns A new array containing elements from arr not present in arr2
 */
export const difference = <T>(arr: T[], arr2: T[]): T[] => {
  const map = new Map<T, number>();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
  }
  let size = arr.length;
  for (let i = 0; i < arr2.length; i++) {
    const count = map.get(arr2[i]) ?? 0;
    if (count > 0) {
      size--;
      map.set(arr2[i], count - 1);
    }
  }
  const res = new Array(size);
  for (let i = 0, j = 0; i < arr.length; i++) {
    const count = map.get(arr[i]) ?? 0;
    if (count > 0) {
      res[j++] = arr[i];
      map.set(arr[i], count - 1);
    }
  }
  return res;
};
