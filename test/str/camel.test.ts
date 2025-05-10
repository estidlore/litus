import { camel } from "/str";

describe("camel", () => {
  it("convert a string to camelCase", () => {
    expect(camel("hello world")).toBe("helloWorld");
    expect(camel("HELLO WORLD")).toBe("helloWorld");
    expect(camel("Hello World 123")).toBe("helloWorld123");
    expect(camel("hello-world")).toBe("helloWorld");
    expect(camel("hello_world")).toBe("helloWorld");
    expect(camel("HelloWorld")).toBe("helloWorld");
    expect(camel("helloWorld")).toBe("helloWorld");
    expect(camel("hello")).toBe("hello");
    expect(camel("helloITWorld")).toBe("helloItWorld");
    expect(camel("")).toBe("");
  });
});
