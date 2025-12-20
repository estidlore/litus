import { round } from "/math";

describe("round", () => {
  it("returns given values rounded to given precision decimals", () => {
    const arr = [-72, 57.6, -1.024];

    expect(round(-1.024)).toBe(-1);
    expect(round(1.005, 2)).toBe(1.01);
    expect(round(arr)).toStrictEqual([-72, 58, -1]);
    expect(round(arr, 2)).toStrictEqual([-72, 57.6, -1.02]);
    expect(round(arr, -1)).toStrictEqual([-70, 60, -0]);
  });
});
