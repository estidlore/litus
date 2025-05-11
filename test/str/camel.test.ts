import { camel } from "/str";

describe("camel", () => {
  it("convert a string to camelCase", () => {
    expect(camel("hello world")).toBe("helloWorld");
    expect(camel("HELLO WORLD")).toBe("helloWorld");
    expect(camel("hello-world")).toBe("helloWorld");
    expect(camel("hello_world")).toBe("helloWorld");
    expect(camel("HelloWorld")).toBe("helloWorld");
    expect(camel("helloWorld")).toBe("helloWorld");
    expect(camel("Hi12World34")).toBe("hi12World34");
    expect(camel("helloITWorld")).toBe("helloItWorld");
    expect(camel("hello")).toBe("hello");
    expect(camel("")).toBe("");
  });
});
