import { range } from "/arr";
import { sample } from "/rand";

describe("sample", () => {
  it("returns a random subset of array", () => {
    const arr = range(0, 50);
    const res = sample(arr, 3);
    expect(res).toHaveLength(3);
    for (let i = 0; i < res.length; i++) {
      expect(arr).toContain(res[i]);
    }
  });
});
