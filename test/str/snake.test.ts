import { snake } from "/str";

describe("snake", () => {
  it("converts strings to snake_case", () => {
    expect(snake("hello world")).toBe("hello_world");
    expect(snake("HELLO WORLD")).toBe("hello_world");
    expect(snake("hello-world")).toBe("hello_world");
    expect(snake("hello_world")).toBe("hello_world");
    expect(snake("HelloWorld")).toBe("hello_world");
    expect(snake("helloWorld")).toBe("hello_world");
    expect(snake("Hi12World34")).toBe("hi_12_world_34");
    expect(snake("helloITWorld")).toBe("hello_it_world");
    expect(snake("hello")).toBe("hello");
    expect(snake("")).toBe("");
  });
});
