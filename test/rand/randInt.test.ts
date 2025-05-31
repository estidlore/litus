import { from } from "/arr";
import { randInt } from "/rand";

describe("randInt", () => {
  it("returns a number between [a, b] and [b, a]", () => {
    let nums = from(100, () => randInt(1, 5));
    expect(new Set(nums)).toStrictEqual(new Set([1, 2, 3, 4, 5]));

    nums = from(100, () => randInt(5, 1));
    expect(new Set(nums)).toStrictEqual(new Set([1, 2, 3, 4, 5]));

    nums = from(100, () => randInt(3));
    expect(new Set(nums)).toStrictEqual(new Set([0, 1, 2, 3]));

    nums = from(100, () => randInt(3, 3));
    expect(new Set(nums)).toStrictEqual(new Set([3]));
  });

  it("defaults to randInt(1, 0) when called with no arguments", () => {
    const nums = from(100, () => randInt());
    expect(new Set(nums)).toStrictEqual(new Set([0, 1]));
  });

  it("works with floating numbers", () => {
    const nums = from(100, () => randInt(1.2, 4.8));
    expect(new Set(nums)).toStrictEqual(new Set([2, 3, 4]));
  });
});
