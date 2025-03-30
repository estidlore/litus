import { range } from "./range";

export const chunk = <T>(arr: T[], size: number): T[][] => {
  return range(0, arr.length, size).map((i) => arr.slice(i, i + size));
};
