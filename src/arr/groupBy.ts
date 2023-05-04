import { group } from "./group";

const groupBy = <T extends object, K extends keyof T>(
  arr: T[],
  key: T[K] extends PropertyKey ? K : never
): Record<PropertyKey & T[K], T[]> => {
  return group(arr, (obj) => obj[key] as PropertyKey & T[K]);
};

export { groupBy };
