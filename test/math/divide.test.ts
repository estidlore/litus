import { divide } from "/math";

describe("divide", () => {
  it("returns division of given vectors/scalars", () => {
    expect(divide(4, 2)).toBe(2);
    expect(divide([-4, 1, 0, 3], 2)).toStrictEqual([-2, 0.5, 0, 1.5]);
    expect(divide([1, 2], [3, 4])).toStrictEqual([1 / 3, 0.5]);
  });
});
