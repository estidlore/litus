import { isObj } from "./isObj";
import { keys } from "./keys";

/**
 * Creates a deep copy of the provided object or array
 * @param obj Object or array to copy
 * @returns Deep copy of the input
 */
export const copy = <T>(obj: T): T => {
  if (!isObj(obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const res = [];
    for (let i = 0; i < obj.length; i++) {
      res[i] = copy(obj[i]);
    }
    return res as T;
  }

  const res = {} as T;
  const mKeys = keys(obj);
  for (let i = 0; i < mKeys.length; i++) {
    const key = mKeys[i];
    res[key] = copy(obj[key]);
  }
  return res;
};
