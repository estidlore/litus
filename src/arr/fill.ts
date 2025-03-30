import { from } from "./from";

export const fill = <T>(n: number, val: T): T[] => {
  return from(n, () => val);
};
