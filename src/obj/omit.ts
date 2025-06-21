import { copy } from "./copy";

/**
 * Creates a deep copy of an object without the specified keys
 * @param obj Source object
 * @param keys Array of keys to omit from the result
 * @returns New object without the specified keys
 */
export const omit = <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const newObj = copy(obj);
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
};
