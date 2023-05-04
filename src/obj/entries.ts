import type { Entry } from "./types";

const entries = <T extends object>(obj: T): Entry<T>[] => {
  return Object.entries(obj) as Entry<T>[];
};

export { entries };
