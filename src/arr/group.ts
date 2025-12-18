/**
 * Groups array items into an object by a key
 * @param arr Array to group
 * @param getKey Function to extract the group key from each item
 * @returns Object with keys as group ids and values as arrays of grouped items
 */
export const group = <T, K extends PropertyKey>(
  arr: T[],
  getKey: (obj: T) => K
): Record<K, T[]> => {
  const res = {} as Record<K, T[]>;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const val = getKey(el);
    if (res[val] === undefined) {
      res[val] = [];
    }
    res[val].push(el);
  }
  return res;
};
