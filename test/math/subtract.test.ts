import { subtract } from "/math";

describe("subtract", () => {
  it("returns subtraction of given vectors/scalars", () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract([-4, 1, 0, 3, 2], 1)).toStrictEqual([-5, 0, -1, 2, 1]);
    expect(subtract([1, 2], [3, 4])).toStrictEqual([-2, -2]);
  });
});
