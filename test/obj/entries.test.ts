import { entries } from "/obj";

import { person } from "./data";

describe("entries", () => {
  it("returns entries of object", () => {
    expect(entries(person.birth)).toStrictEqual([
      ["day", 1],
      ["month", 2],
      ["year", 2000]
    ]);
    expect(entries(person.name)).toStrictEqual([
      ["0", "John"],
      ["1", "Doe"]
    ]);
  });
});
