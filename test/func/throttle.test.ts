import { throttle } from "/func";

describe("throttle", () => {
  jest.useFakeTimers();

  it("returns throttled function", () => {
    const fn = jest.fn();
    const throttledFn = throttle(fn);

    throttledFn();
    expect(fn).toBeCalledTimes(1);

    jest.advanceTimersByTime(40);
    throttledFn();
    jest.advanceTimersByTime(40);
    throttledFn();
    expect(fn).toBeCalledTimes(1);

    jest.advanceTimersByTime(40);
    throttledFn();
    expect(fn).toBeCalledTimes(2);
  });
});
