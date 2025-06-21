import { entries } from "./entries";
import { isObj } from "./isObj";

/**
 * Creates a deep copy of the provided object or array
 * @param obj Object or array to copy
 * @returns Deep copy of the input
 */
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
