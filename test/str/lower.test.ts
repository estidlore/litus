import { lower } from "/str";

describe("lower", () => {
  it("converts strings to lowercase", () => {
    expect(lower("HELLO WORLD")).toBe("hello world");
    expect(lower("hello world")).toBe("hello world");
    expect(lower("Hello World")).toBe("hello world");
  });
});
