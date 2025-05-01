import { debounce } from "/func";

describe("debounce", () => {
  jest.useFakeTimers();

  it("returns debounced function", () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn);

    debouncedFn();
    jest.advanceTimersByTime(10);
    debouncedFn();

    jest.advanceTimersByTime(90);
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(10);
    expect(fn).toBeCalledTimes(1);
  });
});
