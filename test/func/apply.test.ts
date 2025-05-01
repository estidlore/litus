import { apply } from "/func";

describe("apply", () => {
  it("returns function with single array argument", () => {
    const sum = (...arr: number[]): number =>
      arr.reduce((acc, el) => acc + el, 0);
    const appliedSum = apply(sum);

    expect(sum).toHaveLength(0);
    expect(appliedSum).toHaveLength(1);
    expect(appliedSum([-3, 1, 2])).toBe(0);
  });
});
