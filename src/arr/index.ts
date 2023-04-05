const fill = <T>(n: number, val: T): T[] => {
  const res = Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = val;
  }
  return res;
};

const group = <T extends object, K extends PropertyKey>(
  arr: T[],
  getKey: (obj: T) => K
): Record<K, T[]> => {
  const res = <Record<K, T[]>>{};
  arr.forEach((el) => {
    const val = getKey(el);
    if (res[val] === undefined) {
      res[val] = [];
    }
    res[val].push(el);
  });
  return res;
};

const groupBy = <T extends object, K extends keyof T>(
  arr: T[],
  key: T[K] extends PropertyKey ? K : never
): Record<PropertyKey & T[K], T[]> => {
  return group(arr, (obj) => <PropertyKey & T[K]>obj[key]);
};

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

export { fill, group, groupBy, range };
