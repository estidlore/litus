import { findAll } from "/arr";

import { abcArrLike, balls } from "./data";

describe("findAll", () => {
  it("returns matching items", () => {
    expect(findAll(balls, (el) => el.colors.includes("black"))).toStrictEqual([
      balls[0],
      balls[2]
    ]);
  });

  it("works with array-like objects", () => {
    expect(findAll(abcArrLike, (el) => el !== "b")).toStrictEqual(["a", "c"]);
    expect(findAll(abcArrLike, (el) => el === "d")).toStrictEqual([]);
  });
});
