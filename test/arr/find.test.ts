import { find } from "/arr";

import { abcArrLike, balls } from "./data";

describe("find", () => {
  it("returns first matching item", () => {
    expect(find(balls, (el) => el.name === "Baseball")).toStrictEqual(balls[0]);
    expect(find(balls, (el) => el.name === "Soccer")).toBeUndefined();
  });

  it("works with array-like objects", () => {
    expect(find(abcArrLike, (el) => el === "b")).toBe("b");
    expect(find(abcArrLike, (el) => el === "A")).toBeUndefined();
  });
});
