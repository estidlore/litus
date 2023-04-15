import type { Entry, Key, Val } from "./types";

const copy = <T>(obj: T): T => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const res: any = Array.isArray(obj) ? [] : {};

  entries(obj).forEach(([key, val]) => {
    res[key] = copy(val);
  });

  return res;
};

const entries = <T extends object>(obj: T): Entry<T>[] => {
  return Object.entries(obj) as Entry<T>[];
};

const has = (obj: object, ...keys: PropertyKey[]): boolean => {
  return keys.every((key) => Object.prototype.hasOwnProperty.call(obj, key));
};

const keys = <T extends object>(obj: T): Key<T>[] => {
  return Object.keys(obj) as Key<T>[];
};

const merge = <A extends object, B extends object>(a: A, b: B): A & B => {
  return Object.assign(copy(a), copy(b));
};

const vals = <T extends object>(obj: T): Val<T>[] => {
  return Object.values(obj);
};

export { copy, entries, has, keys, merge, vals };
