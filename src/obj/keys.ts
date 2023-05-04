import type { Key } from "./types";

const keys = <T extends object>(obj: T): Key<T>[] => {
  return Object.keys(obj) as Key<T>[];
};

export { keys };
