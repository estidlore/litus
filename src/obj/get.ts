import { has } from "./has";
import { isObj } from "./isObj";

export const get = <T>(obj: object, path: string, fallback?: T): T => {
  let val: unknown = obj;
  for (const key of path.split(".")) {
    if (isObj(val) && has(val, key)) {
      val = val[key];
    } else {
      return fallback as T;
    }
  }
  return val as T;
};
