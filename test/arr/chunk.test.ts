import { chunk } from "/arr";

describe("chunk", () => {
  it("returns array of chunks", () => {
    expect(chunk([1, 2, 3, 4], 2)).toStrictEqual([
      [1, 2],
      [3, 4]
    ]);
  });

  it("returns 1 chunk when size >= arr.length", () => {
    expect(chunk([1, 2, 3], 3)).toStrictEqual([[1, 2, 3]]);
    expect(chunk([1, 2, 3], 4)).toStrictEqual([[1, 2, 3]]);
  });

  it("returns last chunk with remaining items", () => {
    expect(chunk([1, 2, 3], 2)).toStrictEqual([[1, 2], [3]]);
  });

  it("fails when size is not a positive safe integer", () => {
    expect(() => chunk([1, 2, 3], 0)).toThrow();
    expect(() => chunk([1, 2, 3], -1)).toThrow();
    expect(() => chunk([1, 2, 3], 1.5)).toThrow();
    expect(() => chunk([1, 2, 3], Number.MAX_SAFE_INTEGER + 1)).toThrow();
  });
});
