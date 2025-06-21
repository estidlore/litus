/**
 * Calculates the sum of an array of numbers
 * @param arr Numbers to sum
 * @returns Sum of all numbers in the array
 */
export const sum = (arr: number[]): number => {
  return arr.reduce((acc, el) => acc + el, 0);
};
