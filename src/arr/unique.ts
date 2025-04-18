import type { Primitive } from "types";
import { sort } from "./sort";

export const unique = <T extends Primitive>(arr: T[]): T[] => {
  const set = Array.from(new Set(arr));
  return sort(set, (el) => arr.indexOf(el));
};
