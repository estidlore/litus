import { has } from "./has";
import { isObj } from "./isObj";

/**
 * Gets a value at a nested path of an object or array
 * @param obj Source object
 * @param path Dot-separated path string
 * @param fallback Value to return if the path is not found
 * @returns Value at the specified path or the fallback
 */
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
