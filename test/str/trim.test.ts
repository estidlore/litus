import { trim } from "/str";

describe("trim", () => {
  it("trim whitespace by default", () => {
    expect(trim("  Hello  ")).toBe("Hello");
    expect(trim("Hello")).toBe("Hello");
  });

  it("trim specified characters", () => {
    expect(trim("xxHelloxx", "x")).toBe("Hello");
    expect(trim("-_Hello--", "-_")).toBe("Hello");
  });

  it("handle empty strings", () => {
    expect(trim("")).toBe("");
  });

  it("handle strings with only trim characters", () => {
    expect(trim("xxxx", "x")).toBe("");
  });
});
