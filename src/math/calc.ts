import { from } from "/arr/from";
import type { ConvertTuple } from "/arr/types";
import { unapply } from "/func/unapply";

import type { Calc, Quantity } from "./types";

export const calc = <T extends number[]>(
  opFn: (...nums: T) => number
): (<A extends ConvertTuple<T, Quantity>>(...q: A) => Calc<A>) => {
  return unapply(<A extends ConvertTuple<T, Quantity>>(arr: A) => {
    const vectors = arr.filter((el) => typeof el !== "number") as number[][];
    if (vectors.length === 0) {
      return opFn.apply(undefined, arr as unknown as T) as Calc<A>;
    }
    const size = vectors[0].length;
    if (vectors.some((v) => v.length !== size)) {
      throw new Error("All vectors must have same length");
    }
    return from(size, (i) => {
      const input = arr.map((el) => (typeof el === "number" ? el : el[i]));
      return opFn.apply(undefined, input as T);
    }) as Calc<A>;
  });
};
