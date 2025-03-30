import type { Key } from "./types";

export const keys = <T extends object>(obj: T): Key<T>[] => {
  return Object.keys(obj) as Key<T>[];
};
