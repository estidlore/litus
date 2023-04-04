import type { TimeUnit } from "../types";

const MS: Record<TimeUnit, number> = {
  d: 864e5,
  h: 36e5,
  m: 6e4,
  ms: 1,
  s: 1e3
};

const convert = (a: TimeUnit, b: TimeUnit, t = 1): number => {
  return (MS[a] / MS[b]) * t;
};

const date = (t: number, unit: TimeUnit = "ms"): Date => {
  return new Date(convert(unit, "ms", t));
};

const get = (d: Date, unit: TimeUnit = "ms"): number => {
  return convert("ms", unit, d.getTime());
};

export { date, get, convert, MS };
