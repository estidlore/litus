/**
 * Returns elements present in both arrays.
 * Preserves duplicates and order from the first array
 * @param arr - First array to intersect
 * @param arr2 - Second array to intersect
 * @returns Array of common elements
 */
export const intersection = <T>(arr: T[], arr2: T[]): T[] => {
  const map = new Map<T, number>();
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], (map.get(arr2[i]) ?? 0) + 1);
  }
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const count = map.get(arr[i]) ?? 0;
    if (count > 0) {
      res.push(arr[i]);
      map.set(arr[i], count - 1);
    }
  }
  return res;
};
