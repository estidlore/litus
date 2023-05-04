import { from } from "./from";

const fill = <T>(n: number, val: T): T[] => {
  return from(n, () => val);
};

export { fill };
