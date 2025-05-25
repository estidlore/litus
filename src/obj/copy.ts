import { entries } from "./entries";
import { isObj } from "./isObj";

export const copy = <T>(obj: T): T => {
  if (!isObj(obj)) {
    return obj;
  }

  const res = (Array.isArray(obj) ? [] : {}) as T;
  entries(obj).forEach(([key, val]) => {
    res[key] = copy(val);
  });

  return res;
};
