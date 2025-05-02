import { mean } from "/math";

describe("mean", () => {
  const nums = [-4, 1, 0, 3, 2];

  it("returns mean of numbers", () => {
    expect(mean(nums)).toBe(2 / 5);
  });

  it("returns weighted mean of numbers", () => {
    expect(mean(nums, [1, 1, 1, 1, 1])).toBe(2 / 5);
    expect(mean(nums, [1, 2, 3, 4, 5])).toBe(20 / 15);
  });

  it("fails when weights and numbers have different size", () => {
    expect(() => mean(nums, [1, 1, 1, 1])).toThrow();
  });
});
