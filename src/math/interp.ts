import { findIdx } from "arr/findIdx";

export const interp = (x: number[], xp: number[], fp: number[]): number[] => {
  if (xp.length !== fp.length) {
    throw new Error("xp and fp must have the same length");
  }

  return x.map((xi) => {
    if (xi >= xp[xp.length - 1]) {
      return fp[fp.length - 1];
    }
    const i = findIdx(xp, (el) => el >= xi);
    if (i === 0) {
      return fp[0];
    }
    const slope = (fp[i] - fp[i - 1]) / (xp[i] - xp[i - 1]);
    return fp[i - 1] + slope * (xi - xp[i - 1]);
  });
};
