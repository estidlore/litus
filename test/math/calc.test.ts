import { calc } from "/math";

describe("calc", () => {
  it("returns an operation function for vectors/scalars", () => {
    const minus1 = calc((a) => a - 1);
    expect(minus1(3)).toStrictEqual(2);

    const sum = calc((a, b) => a + b);
    expect(sum(1, [2, 3])).toStrictEqual([3, 4]);

    const polynomial = calc((a, b, x) => a * b + x);
    expect(polynomial([1, 2], 3, 4)).toStrictEqual([7, 10]);
  });

  it("operation function fails when vectors have different size", () => {
    expect(() => calc((a, b) => a + b)([1, 2], [3])).toThrow();
  });
});
