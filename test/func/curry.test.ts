import { curry } from "/func";

describe("curry", () => {
  it("returns curried function", () => {
    const curried = curry((a: string, b: number, c: boolean): string => {
      return `${a}.${b}-${c ? "T" : "F"}`;
    });

    expect(curried("Hi")(1)(true)).toBe("Hi.1-T");
    expect(curried("Bye")(2, false)).toBe("Bye.2-F");
    expect(curried("Bye", 3)(true)).toBe("Bye.3-T");
    expect(curried("Hi", 4, false)).toBe("Hi.4-F");
  });
});
