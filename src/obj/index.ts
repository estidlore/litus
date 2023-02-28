import type { LitusObj } from "./types";

const obj: LitusObj = {
  copy(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        res[key] = this.copy(obj[key]);
      }
    }

    return res;
  }
};

export { obj };
