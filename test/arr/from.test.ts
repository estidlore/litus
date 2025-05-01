import { from } from "/arr";

describe("from", () => {
  it("returns array given size and map function", () => {
    expect(from(3, (i) => i < 2)).toStrictEqual([true, true, false]);
    expect(from(4, (i) => i % 2)).toStrictEqual([0, 1, 0, 1]);
  });

  it("fails when size is not a positive integer", () => {
    expect(() => from(3.4, (i) => i)).toThrow();
    expect(() => from(-1, (i) => i)).toThrow();
  });
});
