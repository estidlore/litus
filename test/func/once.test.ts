import { once } from "/func";

describe("once", () => {
  it("calls function only once", () => {
    const fn = jest.fn(() => Math.random());
    const onceFn = once(fn);

    const res1 = onceFn();
    expect(fn).toHaveBeenCalledTimes(1);
    const res2 = onceFn();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(res1).toBe(res2);
  });
});
