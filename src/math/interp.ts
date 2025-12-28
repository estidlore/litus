import { binSearch } from "/arr/binSearch";
import { identity } from "/func/identity";

/**
 * Calculates the linear interpolation of monotonic increasing points (xp, fp) at given x values
 * @param x Points to interpolate
 * @param xp Known x-coordinates (must be increasing)
 * @param fp Known y-coordinates (must be increasing, same size as xp)
 * @returns Interpolated values at each x
 */
export const interp = (x: number[], xp: number[], fp: number[]): number[] => {
  if (xp.length !== fp.length) {
    throw new Error("xp and fp must have the same length");
  }

  return x.map((xi) => {
    if (xi >= xp[xp.length - 1]) {
      return fp[fp.length - 1];
    }
    const i = binSearch(xp, xi, identity);
    if (i === 0) {
      return fp[0];
    }
    const slope = (fp[i] - fp[i - 1]) / (xp[i] - xp[i - 1]);
    return fp[i - 1] + slope * (xi - xp[i - 1]);
  });
};
