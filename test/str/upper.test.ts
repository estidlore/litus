import { upper } from "/str";

describe("upper", () => {
  it("converts strings to UPPERCASE", () => {
    expect(upper("hello world")).toBe("HELLO WORLD");
    expect(upper("HELLO WORLD")).toBe("HELLO WORLD");
    expect(upper("Hello World")).toBe("HELLO WORLD");
  });
});
