/**
 * Counts occurrences of items in an array, grouped by key
 * @param arr Array to count occurrences
 * @param getKey Function to extract group ids
 * @returns Object mapping each key to its count
 */
export const countBy = <T, K extends PropertyKey>(
  arr: T[],
  getKey: (obj: T) => K
): Record<K, number> => {
  const res = {} as Record<K, number>;
  for (let i = 0; i < arr.length; i++) {
    const key = getKey(arr[i]);
    res[key] = (res[key] ?? 0) + 1;
  }
  return res;
};
