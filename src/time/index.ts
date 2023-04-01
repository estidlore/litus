import type { TimeUnit } from "src/types";

const MS: Record<TimeUnit, number> = {
  d: 864e5,
  h: 36e5,
  m: 6e4,
  ms: 1,
  s: 1e3
};

const convert = (a: TimeUnit, b: TimeUnit): number => {
  return MS[a] / MS[b];
};

export { convert, MS };
