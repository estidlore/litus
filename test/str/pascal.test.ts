import { pascal } from "/str";

describe("pascal", () => {
  it("converts strings to PascalCase", () => {
    expect(pascal("hello world")).toBe("HelloWorld");
    expect(pascal("HELLO WORLD")).toBe("HelloWorld");
    expect(pascal("hello-world")).toBe("HelloWorld");
    expect(pascal("hello_world")).toBe("HelloWorld");
    expect(pascal("HelloWorld")).toBe("HelloWorld");
    expect(pascal("helloWorld")).toBe("HelloWorld");
    expect(pascal("Hi12World34")).toBe("Hi12World34");
    expect(pascal("helloITWorld")).toBe("HelloItWorld");
    expect(pascal("hello")).toBe("Hello");
    expect(pascal("")).toBe("");
  });
});
