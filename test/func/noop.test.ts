import { noop } from "/func";

describe("noop", () => {
  it("does nothing", () => {
    expect(noop).not.toThrow();
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    expect(noop()).toBe(undefined);
  });
});
