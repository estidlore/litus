import { from } from "../arr";
import { copy } from "../obj";
import type { Calc, Quantity } from "./types";

const add = (arr: number[], n: number): number[] => {
  return arr.map((el) => el + n);
};

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

const divide = (arr: number[], n: number): number[] => {
  return multiply(arr, 1 / n);
};

const mean = (arr: number[]): number => {
  return sum(arr) / arr.length;
};

const median = (arr: number[]): number => {
  const mid = arr.length / 2;
  const a = Math.floor(mid - 0.5);
  const b = Math.ceil(mid + 0.5);
  return mean(copy(arr).sort().slice(a, b));
};

const mod = (x: number, m: number): number => {
  return ((x % m) + m) % m;
};

const multiply = (arr: number[], n: number): number[] => {
  return arr.map((el) => el * n);
};

const pow = (arr: number[], n: number): number[] => {
  return arr.map((el) => Math.pow(el, n));
};

const round = (arr: number[], n = 0): number[] => {
  return arr.map((el) => {
    const k = Math.pow(10, n);
    return Math.round(el * k) / k;
  });
};

const subtract = (arr: number[], n: number): number[] => {
  return add(arr, -n);
};

const sum = (arr: number[]): number => {
  return arr.reduce((acc, el) => acc + el, 0);
};

export {
  add,
  calc,
  divide,
  mean,
  median,
  mod,
  multiply,
  pow,
  round,
  subtract,
  sum
};
