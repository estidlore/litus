import { copy } from "./copy";

export const omit = <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const newObj = copy(obj);
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
};
