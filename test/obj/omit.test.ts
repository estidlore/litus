import { omit } from "/obj";

import { person } from "./data";

describe("omit", () => {
  it("returns copy of object excluding given properties", () => {
    const omitted = omit(person, ["birth", "id"]);
    expect(omitted).toStrictEqual({ name: person.name });
  });
});
