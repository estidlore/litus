import * as math from ".";

describe("math", () => {
  it("add", () => {
    expect.assertions(1);

    const arr = [-4, 1, 0, 3, 2];
    const exp = [1, 6, 5, 8, 7];
    expect(math.add(arr, 5)).toStrictEqual(exp);
  });

  it("aprox", () => {
    expect.assertions(3);

    expect(math.aprox(3.14, Math.PI)).toBe(false);
    expect(math.aprox(3.14, Math.PI, 2)).toBe(true);
    expect(math.aprox(3.1416, Math.PI)).toBe(true);
  });

  it("calc", () => {
    expect.assertions(6);

    expect(() => math.calc((a, b, x) => a * x + b)(1, 2)).toThrow();
    expect(() => math.calc((a, b) => a + b)([1, 2], [3])).toThrow();
    expect(math.calc((a, b) => a + b)(1, 2, 3)).toBe(3);
    expect(math.calc((a) => a - 1)([3])).toStrictEqual([2]);
    expect(math.calc((a, b) => a + b)(1, [2, 3])).toStrictEqual([3, 4]);
    expect(math.calc((a, b, x) => a * b + x)([1, 2], 3, 4)).toStrictEqual([
      7, 10
    ]);
  });

  it("cumsum", () => {
    expect.assertions(1);

    const arr = [-4, 1, 0, 3, 2];
    expect(math.cumsum(arr)).toStrictEqual([-4, -3, -3, 0, 2]);
  });

  it("divide", () => {
    expect.assertions(1);

    const arr = [-4, 1, 0, 3, 2];
    const exp = [-2, 0.5, 0, 1.5, 1];
    expect(math.divide(arr, 2)).toStrictEqual(exp);
  });

  it("inRange", () => {
    expect.assertions(7);

    expect(math.inRange(3, 1, 5)).toBe(true);
    expect(math.inRange(3, 5, 1)).toBe(true);
    expect(math.inRange(3, 5)).toBe(true);

    expect(math.inRange(0, 0)).toBe(false);
    expect(math.inRange(0, 1)).toBe(true);

    expect(math.inRange(1, 0, 1)).toBe(false);
    expect(math.inRange(1, 1, 0)).toBe(false);
  });

  it("interp", () => {
    expect.assertions(2);

    expect(() => math.interp([0, 1], [1, 2], [3])).toThrow();
    const ix = math.interp([0, 1, 1.5, 2.72, 3.1], [1, 2, 3], [3, 2, 0]);
    expect(math.round(ix, 2)).toStrictEqual([3, 3, 2.5, 0.56, 0]);
  });

  it("mean", () => {
    expect.assertions(4);

    const nums = [-4, 1, 0, 3, 2];
    expect(math.mean(nums)).toBe(2 / 5);
    expect(math.mean(nums, [1, 1, 1, 1, 1])).toBe(2 / 5);
    expect(() => math.mean(nums, [1, 1, 1, 1])).toThrow();
    const meanw = math.mean(nums, [1, 2, 3, 4, 5]);
    expect(math.aprox(meanw, 20 / 15)).toBe(true);
  });

  it("median", () => {
    expect.assertions(2);

    expect(math.median([-4, 1, 0, 3, 2])).toBe(1);
    expect(math.median([1, 0, 3, 2])).toBe(1.5);
  });

  it("mod", () => {
    const scalars = [-2, -1, 0, 1, 2];
    expect.assertions(scalars.length * 3);

    const m = 5;
    scalars.forEach((k) => {
      expect(math.mod(k * m, m)).toBe(0);
      expect(math.mod(k * m + 1, m)).toBe(1);
      expect(math.mod(k * m - 1, m)).toBe(m - 1);
    });
  });

  it("multiply", () => {
    expect.assertions(1);

    const arr = [-4, 1, 0, 3, 2];
    const exp = [-12, 3, 0, 9, 6];
    expect(math.multiply(arr, 3)).toStrictEqual(exp);
  });

  it("pow", () => {
    expect.assertions(1);

    const arr = [-4, 1, 0, 3, 2];
    const exp = [16, 1, 0, 9, 4];
    expect(math.pow(arr, 2)).toStrictEqual(exp);
  });

  it("round", () => {
    expect.assertions(4);

    const arr = [-72, 57.6, -1.024];
    expect(math.round(arr[2])).toBe(-1);
    expect(math.round(arr)).toStrictEqual([-72, 58, -1]);
    expect(math.round(arr, 2)).toStrictEqual([-72, 57.6, -1.02]);
    expect(math.round(arr, -1)).toStrictEqual([-70, 60, -0]);
  });

  it("subtract", () => {
    expect.assertions(1);

    const arr = [-4, 1, 0, 3, 2];
    const exp = [-5, 0, -1, 2, 1];
    expect(math.subtract(arr, 1)).toStrictEqual(exp);
  });

  it("sum", () => {
    expect.assertions(1);

    const arr = [-4, 1, 0, 3, 2];
    expect(math.sum(arr)).toBe(2);
  });
});
