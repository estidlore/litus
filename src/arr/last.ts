/**
 * Gets the last element of an array
 * @param arr The array
 * @returns The last element
 */
export const last = <T>(arr: T[]): T | undefined => {
  return arr[arr.length - 1];
};
