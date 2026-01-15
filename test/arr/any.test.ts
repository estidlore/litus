import { any } from "/arr";

describe("any", () => {
  it("returns true if no elements satisfy the predicate", () => {
    expect(any([1, 2, 3], (x) => x > 5)).toBe(false);
    expect(any([1, 2, 3], (x) => x === 2)).toBe(true);
  });

  it("returns false if array is empty", () => {
    expect(any([], () => true)).toBe(false);
  });

  it("works with array-like objects", () => {
    const arrayLike = { 0: "a", 1: "b", length: 2 };
    expect(any(arrayLike, (x) => x === "c")).toBe(false);
    expect(any(arrayLike, (x) => x === "a")).toBe(true);
  });

  it("passes index and array to predicate", () => {
    const fn = jest.fn(() => false);
    const arr = ["a", "b"];
    any(arr, fn);
    expect(fn).toBeCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, "b", 1, arr);
  });
});
