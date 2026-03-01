import { isObj } from "/obj/isObj";

import { isLength } from "./_isLength";

/**
 * Gets the size of a value. Returns the length or size property if found or the
 * number of own keys for objects
 * @param val - The value to inspect
 * @returns The size of the value
 */
export const size = (val: unknown): number => {
  if (!isObj(val)) {
    return typeof val === "string" ? val.length : 0;
  }
  if ("length" in val && isLength(val.length)) {
    return val.length as number;
  }
  if ("size" in val && isLength(val.size)) {
    return val.size as number;
  }
  let count = 0;
  for (const key in val) {
    if (Object.prototype.hasOwnProperty.call(val, key)) {
      count++;
    }
  }
  return count;
};
