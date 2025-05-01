import { min } from "/arr";

import { balls } from "./data";

describe("min", () => {
  it("returns item with min score", () => {
    expect(min(balls, (el) => el.name.length)).toStrictEqual(balls[1]);
    expect(min(balls, (el) => +(el.size === "big"))).toStrictEqual(balls[0]);
    expect(min(balls, (el) => -el.name.length)).toStrictEqual(balls[2]);
  });
});
