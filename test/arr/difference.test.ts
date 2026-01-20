import { difference } from "/arr";

describe("difference", () => {
  it("should return elements in first array not in second array", () => {
    expect(difference([1, 2, 3], [2])).toStrictEqual([1, 3]);
  });

  it("should return empty array when all elements are in second array", () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toStrictEqual([]);
  });

  it("should return first array when second array is empty", () => {
    expect(difference([1, 2, 3], [])).toStrictEqual([1, 2, 3]);
  });

  it("should return empty array when first array is empty", () => {
    expect(difference([], [1, 2, 3])).toStrictEqual([]);
  });

  it("should handle duplicate elements correctly", () => {
    expect(difference([1, 2, 2, 1, 3], [1, 2])).toStrictEqual([1, 2, 3]);
    expect(difference([1, 1, 1, 2], [1, 1])).toStrictEqual([1, 2]);
    expect(difference([1, 2], [1, 2, 2, 1, 3])).toStrictEqual([]);
  });
});
