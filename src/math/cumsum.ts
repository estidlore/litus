export const cumsum = (arr: number[]): number[] => {
  const res = Array<number>(arr.length);
  res[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res[i] = res[i - 1] + arr[i];
  }
  return res;
};
