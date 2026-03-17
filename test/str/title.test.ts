import { title } from "/str";

describe("title", () => {
  it("converts strings to Title Case", () => {
    expect(title("hello world")).toBe("Hello World");
    expect(title("HELLO WORLD")).toBe("Hello World");
    expect(title("hello-world")).toBe("Hello World");
    expect(title("hello_world")).toBe("Hello World");
    expect(title("HelloWorld")).toBe("Hello World");
    expect(title("helloWorld")).toBe("Hello World");
    expect(title("Hi12World34")).toBe("Hi 12 World 34");
    expect(title("helloITWorld")).toBe("Hello It World");
    expect(title("hello")).toBe("Hello");
    expect(title("")).toBe("");
  });
});
