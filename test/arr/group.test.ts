import { group } from "/arr";

import { balls } from "./data";

describe("group", () => {
  it("returns object with groups", () => {
    expect(group(balls, (el) => el.size)).toStrictEqual({
      big: [balls[1], balls[2]],
      small: [balls[0]]
    });
  });
});
