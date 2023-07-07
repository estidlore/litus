import type { Primitive } from "types";

const unique = <T extends Primitive>(arr: T[]): T[] => {
  const set = Array.from(new Set(arr));
  const indexed = set.map((el) => [el, arr.indexOf(el)] as const);
  return indexed.sort((a, b) => a[1] - b[1]).map((el) => el[0]);
};

export { unique };
