import { find } from "/arr";

import { balls } from "./data";

describe("find", () => {
  it("returns first matching item", () => {
    expect(find(balls, (el) => el.name === "Baseball")).toStrictEqual(balls[0]);
    expect(find(balls, (el) => el.name === "Soccer")).toBeUndefined();
  });
});
