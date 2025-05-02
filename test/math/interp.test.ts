import { interp, round } from "/math";

describe("interp", () => {
  it("returns interpolated array", () => {
    const ix = interp([0, 1, 1.5, 2.72, 3.1], [1, 2, 3], [3, 2, 0]);
    expect(round(ix, 2)).toStrictEqual([3, 3, 2.5, 0.56, 0]);
  });

  it("fails when xp and fp have different size", () => {
    expect(() => interp([0, 1], [1, 2], [3])).toThrow();
  });
});
