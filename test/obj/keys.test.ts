import { keys } from "/obj";

import { person } from "./data";

describe("keys", () => {
  it("returns keys of objects", () => {
    expect(keys(person)).toStrictEqual(["birth", "id", "name"]);
    expect(keys(person.birth)).toStrictEqual(["day", "month", "year"]);
    expect(keys(["a", "b", , , "c"])).toStrictEqual(["0", "1", "4"]);
  });
});
