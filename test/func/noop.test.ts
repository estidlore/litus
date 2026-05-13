import { noop } from "/func";

describe("noop", () => {
  it("does nothing", () => {
    expect(noop).not.toThrow();
    expect(noop()).toBe(undefined);
  });
});
