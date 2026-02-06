import { difference } from "/arr";

describe("difference", () => {
  it("returns elements in first array not in second array", () => {
    expect(difference([1, 2, 3], [2])).toStrictEqual([1, 3]);
    expect(difference([1, 2, 3], [1, 2, 3])).toStrictEqual([]);
  });

  it("handles empty arrays", () => {
    expect(difference([1, 2, 3], [])).toStrictEqual([1, 2, 3]);
    expect(difference([], [1, 2, 3])).toStrictEqual([]);
    expect(difference([], [])).toStrictEqual([]);
  });

  it("handles duplicates", () => {
    expect(difference([1, 2, 2, 1, 3], [1, 2])).toStrictEqual([1, 2, 3]);
    expect(difference([1, 1, 1, 2], [1, 1])).toStrictEqual([1, 2]);
    expect(difference([1, 2], [1, 2, 2, 1, 3])).toStrictEqual([]);
  });
});
