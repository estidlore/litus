import { round } from "./round";

export const aprox = (a: number, b: number, precision = 4): boolean => {
  return round(a, precision) === round(b, precision);
};
