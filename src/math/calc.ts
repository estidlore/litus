import { from } from "../arr/from";
import type { Calc, Quantity } from "./types";

const calc = <A extends Quantity[]>(
  opFn: (...a: number[]) => number,
  ...arr: A
): Calc<A> => {
  if (arr.length !== opFn.length) {
    throw Error("Input array and operation function must have same length");
  }
  const vectors = arr.filter((el) => typeof el !== "number") as number[][];
  if (vectors.length === 0) {
    return opFn.apply(undefined, arr as number[]) as Calc<A>;
  }
  const size = vectors[0].length;
  if (vectors.some((v) => v.length !== size)) {
    throw Error("All vectors must have same length");
  }
  return from(size, (i) => {
    const input: number[] = arr.map((el) => {
      return typeof el === "number" ? el : el[i];
    });
    return opFn.apply(undefined, input);
  }) as Calc<A>;
};

export { calc };
