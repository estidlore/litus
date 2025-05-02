import { range } from "/arr";
import { percentile } from "/math";

describe("percentile", () => {
  const x = [1, 2, 3, 4, 5];
  const p = [25, 50, 75];
  const res = [2, 3, 4];

  it("returns percentiles using linear interpolation", () => {
    expect(percentile(x, p)).toStrictEqual(res);
    expect(percentile(x, 10)).toBe(1.4);
  });

  it("returns weighted percentiles", () => {
    const w = [1, 2, 3, 4, 5];
    const resW = [1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5];

    expect(percentile(x, p, [1, 1, 1, 1, 1])).toStrictEqual(res);
    expect(percentile(x, range(5, 100, 5), w)).toStrictEqual(resW);
  });

  it("fails when percentile is not between 0 and 100", () => {
    const msg = "Percentiles must be between 0 and 100";
    expect(() => percentile(x, -1)).toThrow(msg);
    expect(() => percentile(x, 101)).toThrow(msg);
    expect(() => percentile(x, [0, 50, 100.1])).toThrow(msg);
  });

  it("fails when weights are invalid", () => {
    expect(() => percentile(x, p, [1, 2, 1, 2, -1])).toThrow(
      "Weights must be non-negative"
    );
    expect(() => percentile(x, p, [1, 2, 3])).toThrow(
      "Weights must be the same length as the array"
    );
  });
});
