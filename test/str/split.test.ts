import { split } from "/str";

describe("split", () => {
  it("splits string by delimiter", () => {
    expect(split("a,b,c", ",")).toStrictEqual(["a", "b", "c"]);
    expect(split("a|b|c", "|")).toStrictEqual(["a", "b", "c"]);
    expect(split("a--b--c", "--")).toStrictEqual(["a", "b", "c"]);
  });

  it("splits string with no delimiter present", () => {
    expect(split("abc", ",")).toStrictEqual(["abc"]);
  });

  it("splits empty string", () => {
    expect(split("", ",")).toStrictEqual([""]);
  });

  it("splits string with consecutive delimiters", () => {
    expect(split("a,,b", ",")).toStrictEqual(["a", "", "b"]);
  });

  it("splits string with delimiter at the start or end", () => {
    expect(split(",a,b", ",")).toStrictEqual(["", "a", "b"]);
    expect(split("a,b,", ",")).toStrictEqual(["a", "b", ""]);
  });
});
