import { words } from "/str/_words";

describe("_words", () => {
  it("splits strings into words", () => {
    expect(words("camelCase")).toStrictEqual(["camel", "Case"]);
    expect(words("PascalCase")).toStrictEqual(["Pascal", "Case"]);
    expect(words("snake_case")).toStrictEqual(["snake", "case"]);
    expect(words("kebab-case")).toStrictEqual(["kebab", "case"]);
    expect(words("white spaces")).toStrictEqual(["white", "spaces"]);
    expect(words("UPPERPascal")).toStrictEqual(["UPPER", "Pascal"]);
  });

  it("handles edge cases", () => {
    expect(words("")).toStrictEqual([]);
    expect(words("  -")).toStrictEqual([]);
    expect(words("hello")).toStrictEqual(["hello"]);
    expect(words("  hello world  ")).toStrictEqual(["hello", "world"]);
    const expected = ["hello", "world", "test", "case"];
    expect(words("hello-world_test case")).toStrictEqual(expected);
    expect(words("-hello-_world_ test -case_")).toStrictEqual(expected);
  });
});
