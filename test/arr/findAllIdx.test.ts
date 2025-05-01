import { findAllIdx } from "/arr";

import { balls } from "./data";

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
});
