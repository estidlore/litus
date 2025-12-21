import { words } from "/str/_words";

describe("_words", () => {
  it("splits strings into words", () => {
    // Main formats
    expect(words("camelCase")).toStrictEqual(["camel", "Case"]);
    expect(words("PascalCase")).toStrictEqual(["Pascal", "Case"]);
    expect(words("snake_case")).toStrictEqual(["snake", "case"]);
    expect(words("kebab-case")).toStrictEqual(["kebab", "case"]);
    expect(words("white spaces")).toStrictEqual(["white", "spaces"]);
    expect(words("Pascal Pascal")).toStrictEqual(["Pascal", "Pascal"]);
    expect(words("UPPER UPPER")).toStrictEqual(["UPPER", "UPPER"]);
    // Includes numbers
    expect(words("camel123")).toStrictEqual(["camel", "123"]);
    expect(words("123camel")).toStrictEqual(["123", "camel"]);
    expect(words("Pascal123")).toStrictEqual(["Pascal", "123"]);
    expect(words("123Pascal")).toStrictEqual(["123", "Pascal"]);
    expect(words("snake_123")).toStrictEqual(["snake", "123"]);
    expect(words("123_snake")).toStrictEqual(["123", "snake"]);
    expect(words("kebab-123")).toStrictEqual(["kebab", "123"]);
    expect(words("123-kebab")).toStrictEqual(["123", "kebab"]);
    expect(words("space 123")).toStrictEqual(["space", "123"]);
    expect(words("123 space")).toStrictEqual(["123", "space"]);
    // Mixed format
    expect(words("Pascal_snake")).toStrictEqual(["Pascal", "snake"]);
    expect(words("snake_Pascal")).toStrictEqual(["snake", "Pascal"]);
    expect(words("kebab-Pascal")).toStrictEqual(["kebab", "Pascal"]);
    expect(words("Pascal-kebab")).toStrictEqual(["Pascal", "kebab"]);
    // Includes UPPERCASE
    expect(words("camelUPPER")).toStrictEqual(["camel", "UPPER"]);
    expect(words("PascalUPPER")).toStrictEqual(["Pascal", "UPPER"]);
    expect(words("UPPERPascal")).toStrictEqual(["UPPER", "Pascal"]);
    expect(words("snake_UPPER")).toStrictEqual(["snake", "UPPER"]);
    expect(words("UPPER_snake")).toStrictEqual(["UPPER", "snake"]);
    expect(words("kebab-UPPER")).toStrictEqual(["kebab", "UPPER"]);
    expect(words("UPPER-kebab")).toStrictEqual(["UPPER", "kebab"]);
    expect(words("UPPER123")).toStrictEqual(["UPPER", "123"]);
    expect(words("123UPPER")).toStrictEqual(["123", "UPPER"]);
  });

  it("handles edge cases", () => {
    // Double separator
    expect(words("snake__snake")).toStrictEqual(["snake", "snake"]);
    expect(words("snake_-kebab")).toStrictEqual(["snake", "kebab"]);
    expect(words("snake_ space")).toStrictEqual(["snake", "space"]);
    expect(words("kebab-_snake")).toStrictEqual(["kebab", "snake"]);
    expect(words("kebab--kebab")).toStrictEqual(["kebab", "kebab"]);
    expect(words("kebab- space")).toStrictEqual(["kebab", "space"]);
    expect(words("space _snake")).toStrictEqual(["space", "snake"]);
    expect(words("space -kebab")).toStrictEqual(["space", "kebab"]);
    expect(words("space  space")).toStrictEqual(["space", "space"]);
    // Other
    expect(words("")).toStrictEqual([]);
    expect(words("hello")).toStrictEqual(["hello"]);
    expect(words("  hello world--")).toStrictEqual(["hello", "world"]);
    expect(words("  __")).toStrictEqual([]);
  });
});
