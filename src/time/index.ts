import type { Time, TimeUnit } from "../types";

const MS: Record<TimeUnit, number> = {
  d: 864e5,
  h: 36e5,
  m: 6e4,
  ms: 1,
  s: 1e3
};

const add = (t: Time, t2: Time): Time => {
  return time(t.val + to(t2, t.unit).val, t.unit);
};

const date = (t: Time): Date => {
  return new Date(to(t).val);
};

const dayTime = (d: Date, unit: TimeUnit = "ms"): Time => {
  const t = get(d, "d");
  t.val %= 1;
  return to(t, unit);
};

const get = (d: Date, unit: TimeUnit = "ms"): Time => {
  return to(time(d.getTime()), unit);
};

const time = (val: number, unit: TimeUnit = "ms"): Time => {
  return { unit, val };
};

const to = (t: Time, unit: TimeUnit = "ms"): Time => {
  const ms = Math.round(MS[t.unit] * t.val);
  return time(ms / MS[unit], unit);
};

export { add, date, dayTime, get, MS, time, to };
