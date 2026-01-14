import { all } from "/arr";

describe("all", () => {
  it("returns true if no elements satisfy the predicate", () => {
    expect(all([1, 2, 3], (x) => x < 5)).toBe(true);
    expect(all([1, 2, 3], (x) => x === 2)).toBe(false);
  });

  it("returns true if array is empty", () => {
    expect(all([], () => false)).toBe(true);
  });

  it("works with array-like objects", () => {
    const arrayLike = { 0: "a", 1: "b", length: 2 };
    expect(all(arrayLike, (x) => x !== "c")).toBe(true);
    expect(all(arrayLike, (x) => x === "a")).toBe(false);
  });

  it("passes index and array to predicate", () => {
    const fn = jest.fn(() => true);
    const arr = ["a", "b"];
    all(arr, fn);
    expect(fn).toBeCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, "b", 1, arr);
  });
});
