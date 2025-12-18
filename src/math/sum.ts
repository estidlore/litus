/**
 * Calculates the sum of an array of numbers
 * @param arr Numbers to sum
 * @returns Sum of all numbers in the array
 */
export const sum = (arr: number[]): number => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
};
