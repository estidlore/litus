import { map } from "/arr";

describe("map", () => {
  it("maps array elements to a new array", () => {
    const arr = ["a", "b", "c"];
    const res = map(
      arr,
      (x, i, arr) => x + String(i) + "." + String(arr.length)
    );
    expect(res).toStrictEqual(["a0.3", "b1.3", "c2.3"]);
    expect(res).not.toBe(arr);
  });

  it("works with empty array and array-like objects", () => {
    expect(map([], (x) => x * 2)).toStrictEqual([]);

    const arr = { 0: "a", 1: "b", length: 2 };
    const res = map(arr, (el) => el.toUpperCase());
    expect(res).toStrictEqual(["A", "B"]);
  });
});
