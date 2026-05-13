import { from } from "/arr/from";
import type { ConvertTuple } from "/arr/types";

import type { Quantity } from "./types";

export type Calc<A extends Quantity[]> = A extends number[] ? number : number[];

/**
 * Creates a function that applies the given operation to any combination of scalars and vectors
 * @template T Tuple or array of numbers for the operation
 * @param opFn Operation function to apply to the inputs
 * @returns Function that takes quantities (scalars or vectors) and returns the calculated result
 * @example
 * const fn = calc((a, b, c) => a * b + c);
 * fn([1, 2], 3, 4); // [7, 10]
 */
export const calc = <T extends number[]>(
  opFn: (...nums: T) => number,
): (<A extends ConvertTuple<T, Quantity>>(...q: A) => Calc<A>) => {
  return <A extends ConvertTuple<T, Quantity>>(...arr: A) => {
    const vectors = arr.filter((el) => typeof el !== "number");
    if (vectors.length === 0) {
      return opFn(...(arr as unknown as T)) as Calc<A>;
    }
    const size = vectors[0].length;
    for (let i = 1; i < vectors.length; i++) {
      if (vectors[i].length !== size) {
        throw new Error("All vectors must have same length");
      }
    }
    return from(size, (i) => {
      const input = arr.map((el) => (typeof el === "number" ? el : el[i]));
      return opFn(...(input as T));
    }) as Calc<A>;
  };
};
