import { entries } from "./entries";

export const copy = <T>(obj: T): T => {
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
