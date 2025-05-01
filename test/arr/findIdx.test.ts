import { findIdx } from "/arr";

import { balls } from "./data";

describe("findIdx", () => {
  it("returns index of first matching item", () => {
    expect(findIdx(balls, (el) => el.name === "Baseball")).toBe(0);
    expect(findIdx(balls, (el) => el.size === "big")).toBe(1);
  });

  it("returns -1 when there are no matches", () => {
    expect(findIdx(balls, (el) => el.name === "Soccer")).toBe(-1);
    expect(findIdx(balls, (el) => el.size === "small", 1)).toBe(-1);
  });
});
