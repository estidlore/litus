import { randWeight } from "./randWeight";

const op = <T>(arr: T[], size: number, pick: (n: number) => number): T[] => {
  const n = Math.min(size, arr.length);
  const res = arr.slice();
  const end = res.length - n;
  for (let i = res.length - 1; i > end; i--) {
    const idx = pick(i + 1);
    [res[i], res[idx]] = [res[idx], res[i]];
  }
  return n === arr.length ? res : res.slice(0, n);
};

export const fisherYates = <T>(
  data: T[],
  size: number,
  weights?: number[]
): T[] => {
  if (size <= 0) {
    return [];
  }
  if (weights === undefined) {
    return op(data, size, (n) => Math.floor(Math.random() * n));
  }
  if (weights.length !== data.length) {
    throw new Error("Weights must have the same length as the data array");
  }
  if (weights.some((w) => w < 0)) {
    throw new Error("Weights cannot contain negative values.");
  }
  const w = weights.slice();
  return op(data, size, () => {
    const idx = randWeight(w);
    w[idx] = 0;
    return idx;
  });
};
