const copy = <T>(obj: T): T => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const res: any = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = copy(obj[key]);
    }
  }

  return res;
};

export { copy };
