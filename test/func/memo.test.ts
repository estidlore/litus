import { memo } from "/func";

describe("memo", () => {
  jest.useFakeTimers();

  it("returns memoized function", () => {
    const fn = jest.fn((a: number, b: number) => a + b);
    const memoizedFn = memo(fn);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(fn).toBeCalledTimes(1);
    expect(memoizedFn(1, 2)).toBe(3);
    expect(fn).toBeCalledTimes(1);
  });

  it("refreshes cached value after ttl ms", () => {
    const fn = jest.fn((a: number, b: number) => a + b);
    const memoizedFn = memo(fn, undefined, 100);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(fn).toBeCalledTimes(1);

    jest.advanceTimersByTime(50);
    expect(memoizedFn(1, 2)).toBe(3);
    expect(fn).toBeCalledTimes(1);

    jest.advanceTimersByTime(50);
    expect(memoizedFn(1, 2)).toBe(3);
    expect(fn).toBeCalledTimes(2);
  });
});
