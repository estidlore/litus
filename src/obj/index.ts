const copy = <T>(obj: T): T => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const res: any = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (hasProps(obj, key)) {
      res[key] = copy(obj[key]);
    }
  }

  return res;
};

const hasProps = (obj: object, ...keys: PropertyKey[]): boolean => {
  return keys.every((key) => Object.prototype.hasOwnProperty.call(obj, key));
};

const merge = <A extends object, B extends object>(a: A, b: B): A & B => {
  return Object.assign(copy(a), copy(b));
};

export { copy, hasProps, merge };
