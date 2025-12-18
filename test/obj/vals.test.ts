import { vals } from "/obj";

import { person } from "./data";

describe("vals", () => {
  it("returns values of object", () => {
    expect(vals(person.birth)).toStrictEqual([1, 2, 2000]);
    expect(vals(person.name)).toStrictEqual(["John", "Doe"]);
    expect(vals(["a", "b", , , "c"])).toStrictEqual(["a", "b", "c"]);
  });
});
