import { findAll } from "/arr";

import { balls } from "./data";

describe("findAll", () => {
  it("returns matching items", () => {
    expect(findAll(balls, (el) => el.colors.includes("black"))).toStrictEqual([
      balls[0],
      balls[2]
    ]);
  });
});
