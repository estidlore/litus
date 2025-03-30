import { copy } from "./copy";

export const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  const res: Partial<T> = {};
  for (const key of keys) {
    res[key] = copy(obj[key]);
  }
  return res as Pick<T, K>;
};
