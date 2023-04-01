const range = (a: number, b: number, step = 1): number[] => {
  const n = Math.ceil((b - a) / step);
  if (n <= 0) {
    throw Error("Invalid range");
  }
  const res = Array(n);
  let i = n;
  while (--i >= 0) {
    res[i] = a + step * i;
  }
  return res;
};

export { range };
