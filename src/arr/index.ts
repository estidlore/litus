import type { Primitive } from "../types";

const chunk = <T>(arr: T[], size: number): T[][] => {
  return range(0, arr.length, size).map((i) => arr.slice(i, i + size));
};

const fill = <T>(n: number, val: T): T[] => {
  return from(n, () => val);
};

const from = <T>(n: number, mapFn: (i: number) => T): T[] => {
  const res = Array<T>(n);
  let i = n;
  while (--i >= 0) {
    res[i] = mapFn(i);
  }
  return res;
};

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

const groupBy = <T extends object, K extends keyof T>(
  arr: T[],
  key: T[K] extends PropertyKey ? K : never
): Record<PropertyKey & T[K], T[]> => {
  return group(arr, (obj) => obj[key] as PropertyKey & T[K]);
};

const range = (a: number, b: number, step = 1): number[] => {
  const n = Math.ceil((b - a) / step);
  if (n <= 0) {
    throw Error("Invalid range");
  }
  return from(n, (i) => a + step * i);
};

const sort = <T>(
  arr: T[],
  mapFn: ((el: T) => number) | ((el: T) => string)
): T[] => {
  const mapped = arr.map((el) => [mapFn(el), el] as const);
  mapped.sort(([a], [b]) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  mapped.forEach(([, el], i) => {
    arr[i] = el;
  });
  return arr;
};

const unique = <T extends Primitive>(arr: T[]): T[] => {
  const set = Array.from(new Set(arr));
  const indexed = set.map((el) => [el, arr.indexOf(el)] as const);
  return indexed.sort((a, b) => a[1] - b[1]).map((el) => el[0]);
};

export { chunk, fill, from, group, groupBy, range, sort, unique };
