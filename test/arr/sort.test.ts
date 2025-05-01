import { sort } from "/arr";

describe("sort", () => {
  it("returns sorted array", () => {
    expect(sort([2, 1, 2], (n) => -n)).toStrictEqual([2, 2, 1]);
    expect(sort(["3", "1", "2"], (n) => n)).toStrictEqual(["1", "2", "3"]);
    expect(sort(["1", 2, 11], String)).toStrictEqual(["1", 11, 2]);
  });

  it("returns same array sorted in-place", () => {
    const arr = [3, 1, 2];
    const sorted = sort(arr, (n) => n);
    expect(sorted).toBe(arr);
  });
});
