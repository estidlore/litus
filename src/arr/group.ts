const group = <T, K extends PropertyKey>(
  arr: T[],
  getKey: (obj: T) => K
): Record<K, T[]> => {
  const res = {} as Record<K, T[]>;
  arr.forEach((el) => {
    const val = getKey(el);
    if (res[val] === undefined) {
      res[val] = [];
    }
    res[val].push(el);
  });
  return res;
};

export { group };
