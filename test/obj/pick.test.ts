import { pick } from "/obj";

import { person } from "./data";

describe("pick", () => {
  it("returns copy of object with given properties only", () => {
    const picked = pick(person, ["birth", "id"]);
    expect(picked).toStrictEqual({
      birth: person.birth,
      id: person.id
    });
  });
});
