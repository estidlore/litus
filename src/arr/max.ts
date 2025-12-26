/**
 * Returns the element with the maximum value based on the provided map function
 * @param arr Array to search
 * @param fn Function to extract the value for comparison
 * @returns Element with the maximum value
 */
export const max = <T>(arr: T[], fn: (val: T) => number): T => {
  let maxIdx = 0;
  let maxVal = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    const val = fn(arr[i]);
    if (val > maxVal) {
      maxIdx = i;
      maxVal = val;
    }
  }
  return arr[maxIdx];
};
