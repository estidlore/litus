import type { Entry } from "./types";

export const entries = <T extends object>(obj: T): Entry<T>[] => {
  return Object.entries(obj) as Entry<T>[];
};
