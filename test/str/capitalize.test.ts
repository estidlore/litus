import { capitalize } from "/str";

describe("capitalize", () => {
  it("capitalize the first letter and lowercase the rest", () => {
    expect(capitalize("hello world")).toBe("Hello world");
    expect(capitalize("hElLo")).toBe("Hello");
    expect(capitalize("")).toBe("");
    expect(capitalize("h")).toBe("H");
    expect(capitalize("H")).toBe("H");
  });

  it("handle non-alphabetic characters at the start", () => {
    expect(capitalize(" hello")).toBe(" hello");
    expect(capitalize("1test")).toBe("1test");
    expect(capitalize("!hello")).toBe("!hello");
  });
});
