const from = <T>(n: number, mapFn: (i: number) => T): T[] => {
  const res = Array<T>(n);
  let i = n;
  while (--i >= 0) {
    res[i] = mapFn(i);
  }
  return res;
};

export { from };
