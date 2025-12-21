/**
 * Returns the element with the minimum value based on the provided map function
 * @param arr Array to search
 * @param fn Function to extract the value for comparison
 * @returns Element with the minimum value
 */
export const min = <T>(arr: T[], fn: (val: T) => number): T => {
  let minIdx = 0;
  let minVal = Number.POSITIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    const val = fn(arr[i]);
    if (val < minVal) {
      minIdx = i;
      minVal = val;
    }
  }
  return arr[minIdx];
};
