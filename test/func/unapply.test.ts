import { unapply } from "/func";

describe("unapply", () => {
  it("returns function with spread array argument", () => {
    const sum = (arr: number[]): number => arr.reduce((acc, el) => acc + el, 0);
    const unappliedSum = unapply(sum);

    expect(sum).toHaveLength(1);
    expect(unappliedSum).toHaveLength(0);
    expect(unappliedSum(-3, 1, 2)).toBe(0);
  });
});
