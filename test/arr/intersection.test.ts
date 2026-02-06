import { intersection } from "/arr";

describe("intersection", () => {
  it("returns common elements from two arrays", () => {
    expect(intersection([1, 2, 3], [4, 3, 2])).toStrictEqual([2, 3]);
    expect(intersection([1, 2, 3], [4, 5, 6])).toStrictEqual([]);
  });

  it("handles empty arrays", () => {
    expect(intersection([], [1, 2, 3])).toStrictEqual([]);
    expect(intersection([1, 2, 3], [])).toStrictEqual([]);
    expect(intersection([], [])).toStrictEqual([]);
  });

  it("preserves duplicates", () => {
    expect(intersection([1, 1, 1, 2], [1, 1, 3])).toStrictEqual([1, 1]);
  });
});
