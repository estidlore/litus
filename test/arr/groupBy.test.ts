import { groupBy } from "/arr";

import { balls } from "./data";

describe("groupBy", () => {
  it("returns object with groups by key", () => {
    expect(groupBy(balls, "size")).toStrictEqual({
      big: [balls[1], balls[2]],
      small: [balls[0]]
    });
  });
});
