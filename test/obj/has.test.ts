import { has } from "/obj";

import { person } from "./data";

describe("has", () => {
  it("returns whether object has keys", () => {
    expect(has(person, "birth", "id", "name")).toBe(true);
    expect(has(person, "height")).toBe(false);
  });
});
