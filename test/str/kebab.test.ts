import { kebab } from "/str";

describe("kebab", () => {
  it("converts strings to kebab-case", () => {
    expect(kebab("hello world")).toBe("hello-world");
    expect(kebab("HELLO WORLD")).toBe("hello-world");
    expect(kebab("hello-world")).toBe("hello-world");
    expect(kebab("hello_world")).toBe("hello-world");
    expect(kebab("HelloWorld")).toBe("hello-world");
    expect(kebab("helloWorld")).toBe("hello-world");
    expect(kebab("Hi12World34")).toBe("hi-12-world-34");
    expect(kebab("helloITWorld")).toBe("hello-it-world");
    expect(kebab("hello")).toBe("hello");
    expect(kebab("")).toBe("");
  });
});
