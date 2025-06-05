import { range } from "/arr";
import { fisherYates } from "/rand/_fisherYates";

describe("_fisherYates", () => {
  it("returns empty array if size is <= 0", () => {
    expect(fisherYates([1, 2, 3], 0)).toHaveLength(0);
    expect(fisherYates([1, 2, 3], -1)).toHaveLength(0);
  });

  it("returns all elements if size >= array length", () => {
    const arr = range(0, 50);
    const res = fisherYates(arr, 51);
    expect(res).toHaveLength(arr.length);
    expect(res).not.toEqual(arr);
    expect(res.slice().sort()).toEqual(arr.slice().sort());

    const res2 = fisherYates(arr, arr.length);
    expect(res2).toHaveLength(arr.length);
    expect(res2).not.toEqual(arr);
    expect(res2.slice().sort()).toEqual(arr.slice().sort());
  });

  it("returns shuffled array of given size", () => {
    const arr = range(0, 50);
    const res = fisherYates(arr, 3);
    expect(res).toHaveLength(3);
    res.forEach((el) => {
      expect(arr).toContain(el);
    });
  });

  it("returns weighted shuffled array", () => {
    const arr = ["a", "b", "c"];
    const weights = [0, 1, 2];
    const res = fisherYates(arr, 2, weights);
    expect(res).toHaveLength(2);
    res.forEach((el) => {
      expect(arr).toContain(el);
    });
  });

  it("throws if weights are invalid", () => {
    expect(() => fisherYates([1, 2, 3], 2, [1, 2])).toThrow(
      "Weights must have the same length as the data array"
    );
    expect(() => fisherYates([1, 2, 3], 2, [1, -1, 2])).toThrow(
      "Weights cannot contain negative values."
    );
  });
});
