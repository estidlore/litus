import { template } from "/str";

describe("template", () => {
  it("returns string with replaced paths", () => {
    const res = template("{{name.first}} {{name.last}} is {{age}}", {
      age: 18,
      name: {
        first: "John",
        last: "Doe"
      }
    });
    expect(res).toBe("John Doe is 18");
  });
});
