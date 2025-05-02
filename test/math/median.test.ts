import { median } from "/math";

describe("median", () => {
  it("returns median of numbers", () => {
    expect(median([-4, 1, 0, 3, 2])).toBe(1);
    expect(median([1, 0, 3, 2])).toBe(1.5);
  });
});
