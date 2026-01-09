import type { ReduceFn } from "/arr";
import { reduce } from "/arr";

describe("reduce", () => {
  it("reduces an array to a single value", () => {
    expect(reduce(["a", "b", "c"], (acc, val) => acc + val, "")).toBe("abc");
    expect(reduce([5], (acc, val) => acc * val, 2)).toBe(10);
  });

  it("works with empty array and array-like objects", () => {
    expect(reduce([], (acc, val: number) => acc + val, 5)).toBe(5);

    const arr = { 0: "x", 1: "y", length: 2 };
    const result = reduce(arr, (acc, val) => acc + val, "");
    expect(result).toBe("xy");
  });

  it("passes correct index and array to the reducer", () => {
    const arr = [10, 20];
    const reduceFn: ReduceFn<number, number> = (acc, val, idx, arr) =>
      acc + val + idx + arr.length;
    const spy = jest.fn(reduceFn);
    reduce(arr, spy, 0);
    expect(spy).toHaveBeenCalledWith(0, 10, 0, arr);
    expect(spy).toHaveBeenCalledWith(12, 20, 1, arr);
  });
});
