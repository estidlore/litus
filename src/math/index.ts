import { copy } from "../obj";

const add = (arr: number[], n: number): number[] => {
  return arr.map((el) => el + n);
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

export { add, divide, mean, median, mod, multiply, pow, round, subtract, sum };
