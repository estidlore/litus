const copy = <T>(obj: T): T => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const res: any = Array.isArray(obj) ? [] : {};

  keys(obj).forEach((key) => {
    res[key] = copy(obj[key]);
  });

  return res;
};

const has = (obj: object, ...keys: PropertyKey[]): boolean => {
  return keys.every((key) => Object.prototype.hasOwnProperty.call(obj, key));
};

const keys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

const merge = <A extends object, B extends object>(a: A, b: B): A & B => {
  return Object.assign(copy(a), copy(b));
};

const vals = <T extends object>(obj: T): T[keyof T][] => {
  return Object.values(obj);
};

export { copy, has, keys, merge, vals };
