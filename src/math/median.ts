import { copy } from "../obj/copy";
import { mean } from "./mean";

const median = (arr: number[]): number => {
  const mid = arr.length / 2;
  const a = Math.floor(mid - 0.5);
  const b = Math.ceil(mid + 0.5);
  return mean(copy(arr).sort().slice(a, b));
};

export { median };
