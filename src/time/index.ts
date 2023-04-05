import type { Time, TimeUnit } from "../types";

const MS: Record<TimeUnit, number> = {
  d: 864e5,
  h: 36e5,
  m: 6e4,
  ms: 1,
  s: 1e3
};

const date = (t: Time): Date => {
  return new Date(to(t).val);
};

const get = (d: Date, unit: TimeUnit = "ms"): Time => {
  return to(time(d.getTime()), unit);
};

const time = (val: number, unit: TimeUnit = "ms"): Time => {
  return { unit, val };
};

const to = (t: Time, unit: TimeUnit = "ms"): Time => {
  return time((MS[t.unit] / MS[unit]) * t.val, unit);
};

export { date, get, MS, time, to };
