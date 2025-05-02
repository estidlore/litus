import { add } from "/math";

describe("add", () => {
  it("returns addition of given vectors/scalars", () => {
    expect(add(2, 3)).toBe(5);
    expect(add([-4, 1, 0, 3, 2], 5)).toStrictEqual([1, 6, 5, 8, 7]);
    expect(add([1, 2], [3, 4])).toStrictEqual([4, 6]);
  });
});
