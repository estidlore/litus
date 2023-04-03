const add = (arr: number[], n: number): number[] => {
  return arr.map((el) => el + n);
};

const mean = (arr: number[]): number => {
  return sum(arr) / arr.length;
};

const median = (arr: number[]): number => {
  const mid = arr.length / 2;
  const a = Math.floor(mid - 0.5);
  const b = Math.ceil(mid + 0.5);
  return mean([...arr].sort().slice(a, b));
};

const mod = (x: number, m: number): number => {
  return ((x % m) + m) % m;
};

const sum = (arr: number[]): number => {
  return arr.reduce((acc, el) => acc + el, 0);
};

export { add, mean, median, mod, sum };
