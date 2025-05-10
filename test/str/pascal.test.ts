import { pascal } from "/str";

describe("pascal", () => {
  it("converts strings to PascalCase", () => {
    expect(pascal("hello world")).toBe("HelloWorld");
    expect(pascal("HELLO WORLD")).toBe("HelloWorld");
    expect(pascal("Hello World 123")).toBe("HelloWorld123");
    expect(pascal("hello-world")).toBe("HelloWorld");
    expect(pascal("hello_world")).toBe("HelloWorld");
    expect(pascal("HelloWorld")).toBe("HelloWorld");
    expect(pascal("helloWorld")).toBe("HelloWorld");
    expect(pascal("hello")).toBe("Hello");
    expect(pascal("helloITWorld")).toBe("HelloItWorld");
    expect(pascal("")).toBe("");
  });
});
