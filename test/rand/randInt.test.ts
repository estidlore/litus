import { from } from "/arr";
import { randInt } from "/rand";

describe("randInt", () => {
  it("returns a number between [a, b] and [b, a]", () => {
    let nums = from(100, () => randInt(1, 5));
    expect(new Set(nums)).toStrictEqual(new Set([1, 2, 3, 4]));

    nums = from(100, () => randInt(5, 1));
    expect(new Set(nums)).toStrictEqual(new Set([1, 2, 3, 4]));

    nums = from(100, () => randInt(3));
    expect(new Set(nums)).toStrictEqual(new Set([0, 1, 2]));

    nums = from(100, () => randInt(3, 3));
    expect(new Set(nums)).toStrictEqual(new Set([3]));
  });

  it("throws when a or b are not integers", () => {
    expect(() => randInt(1.2, 3)).toThrow("a and b must be integers");
    expect(() => randInt(1, 2.3)).toThrow("a and b must be integers");
    expect(() => randInt(1.2, 3.4)).toThrow("a and b must be integers");
    expect(() => randInt(1.0, 2.0)).not.toThrow();
  });
});
