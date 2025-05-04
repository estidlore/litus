import { mod } from "/math";

describe("mod", () => {
  it("returns modulo operation of vectors/scalars", () => {
    expect(mod([2, 3, 4], 3)).toStrictEqual([2, 0, 1]);
    expect(mod(3, [2, 3, 4])).toStrictEqual([1, 0, 3]);

    expect(mod([-2, -3, -4], 3)).toStrictEqual([1, 0, 2]);
    expect(mod(3, [-2, -3, -4])).toStrictEqual(mod(3, [2, 3, 4]));

    expect(mod([4, 5], [2, 3])).toStrictEqual([0, 2]);

    expect(mod(3, 0)).toBe(NaN);
    expect(mod(0, 3)).toBe(0);
  });
});
