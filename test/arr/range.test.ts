import { range } from "/arr";

describe("range", () => {
  it("return array of numbers in range with step", () => {
    expect(range(0, 3)).toStrictEqual([0, 1, 2]);
    expect(range(3, 0, -1)).toStrictEqual([3, 2, 1]);
    expect(range(0, 1.1, 0.5)).toStrictEqual([0, 0.5, 1]);
  });

  it("fails when step is invalid", () => {
    expect(() => range(0, 2, -1)).toThrow();
    expect(() => range(2, 0, 1)).toThrow();
    expect(() => range(0, 2, 0)).toThrow();
  });
});
