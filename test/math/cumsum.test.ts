import { cumsum } from "/math";

describe("cumsum", () => {
  it("returns array of cumulative sum", () => {
    expect(cumsum([-4, 1, 0, 3, 2])).toStrictEqual([-4, -3, -3, 0, 2]);
  });
});
