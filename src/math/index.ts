const add = (arr: number[], n: number): number[] => {
  return arr.map((el) => el + n);
};

const mod = (x: number, m: number): number => {
  return ((x % m) + m) % m;
};

const sum = (arr: number[]): number => {
  return arr.reduce((acc, el) => acc + el, 0);
};

export { add, mod, sum };
