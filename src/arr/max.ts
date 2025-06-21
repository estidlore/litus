/**
 * Returns the element with the maximum value based on the provided map function
 * @param arr Array to search
 * @param fn Function to extract the value for comparison
 * @returns Element with the maximum value
 */
export const max = <T>(arr: T[], fn: (val: T) => number): T => {
  const scores = arr.map(fn);
  let maxIdx = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[maxIdx]) {
      maxIdx = i;
    }
  }
  return arr[maxIdx];
};
