import * as func from ".";

describe("func", () => {
  it("apply & unapply", () => {
    expect.assertions(2);

    const appliedMax = func.apply(Math.max);
    expect(appliedMax([-3, 1, 2])).toBe(2);
    const max = func.unapply(appliedMax);
    expect(max(-3, 1, 2)).toBe(2);
  });

  it("curry", () => {
    expect.assertions(4);
    const curried = func.curry((a: string, b: number, c: boolean): string => {
      return `${a}.${b}-${c ? "T" : "F"}`;
    });

    expect(curried("Hi")(1)(true)).toBe("Hi.1-T");
    expect(curried("Bye")(2, false)).toBe("Bye.2-F");
    expect(curried("Bye", 3)(true)).toBe("Bye.3-T");
    expect(curried("Hi", 4, false)).toBe("Hi.4-F");
  });

  it("debounce", () => {
    expect.assertions(2);
    jest.useFakeTimers();

    const fn = jest.fn();
    const debouncedFn = func.debounce(fn);
    debouncedFn();
    jest.advanceTimersByTime(10);
    debouncedFn();

    jest.advanceTimersByTime(90);
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(10);
    expect(fn).toBeCalledTimes(1);

    jest.useRealTimers();
  });

  it("memo", () => {
    expect.assertions(4);
    const fn = jest.fn((a: number, b: number) => a + b);
    const memoizedFn = func.memo(fn);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(fn).toBeCalledTimes(1);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(fn).toBeCalledTimes(1);
  });
});
