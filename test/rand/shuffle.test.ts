import { range } from "/arr";
import { shuffle } from "/rand";

describe("shuffle", () => {
  it("returns shuffled array", () => {
    const arr = range(0, 100);
    const res = shuffle(arr);
    expect(res).toHaveLength(arr.length);
    expect(res.slice().sort()).toEqual(arr.slice().sort());
    expect(res.some((el, idx) => el !== arr[idx])).toBe(true);
  });
});
