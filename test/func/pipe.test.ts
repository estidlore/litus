import { pipe } from "/func";

describe("pipe", () => {
  const add1 = (x: number): number => x + 1;
  const isEven = (x: number): boolean => x % 2 === 0;
  const len = (s: string): number => s.length;
  const toStr = (x: unknown): string => String(x);

  it("pipes unary functions", () => {
    const isEvenLen = pipe(len, isEven);
    expect(isEvenLen("abc")).toBe(false);

    const piped3 = pipe(add1, isEven, toStr);
    expect(piped3(4)).toBe("false");

    const piped1 = pipe(add1);
    expect(piped1(5)).toBe(6);
  });
});
