/**
 * Calculates the cumulative sum of an array of numbers
 * @param arr Array of numbers to sum
 * @returns Array of cumulative sums
 */
export const cumsum = (arr: number[]): number[] => {
  const res = Array<number>(arr.length);
  res[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res[i] = res[i - 1] + arr[i];
  }
  return res;
};
