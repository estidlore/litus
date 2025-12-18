import { copy } from "./copy";

/**
 * Creates a deep copy of an object with only the specified keys
 * @param obj Source object
 * @param keys Array of keys to pick from the object
 * @returns New object with only the picked keys
 */
export const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  const res: Partial<T> = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    res[key] = copy(obj[key]);
  }
  return res as Pick<T, K>;
};
