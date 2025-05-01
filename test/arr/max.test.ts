import { max } from "/arr";

import { balls } from "./data";

describe("max", () => {
  it("returns item with max score", () => {
    expect(max(balls, (el) => el.name.length)).toStrictEqual(balls[2]);
    expect(max(balls, (el) => el.colors.length)).toStrictEqual(balls[1]);
    expect(max(balls, (el) => -el.name.length)).toStrictEqual(balls[1]);
  });
});
