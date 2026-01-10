import { findAllIdx } from "/arr";

import { abcArrLike, balls } from "./data";

describe("findAllIdx", () => {
  it("returns indexes of matching items", () => {
    expect(
      findAllIdx(balls, (el) => el.colors.includes("black"))
    ).toStrictEqual([0, 2]);
  });

  it("returns matches in given range", () => {
    expect(
      findAllIdx(balls, (el) => el.colors.includes("black"), 0, 3, 1)
    ).toStrictEqual([0]);
    expect(findAllIdx(balls, (el) => el.size === "small", 1)).toHaveLength(0);
  });

  it("works with array-like objects", () => {
    expect(findAllIdx(abcArrLike, (el) => el !== "b")).toStrictEqual([0, 2]);
    expect(findAllIdx(abcArrLike, (el) => el === "d")).toStrictEqual([]);
  });
});
