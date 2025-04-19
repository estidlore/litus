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
