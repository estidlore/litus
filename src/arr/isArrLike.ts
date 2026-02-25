import { isObj } from "/obj/isObj";

import { isLength } from "./_isLength";

/**
 * Checks if the provided value is array-like
 * @param val Value to check
 * @returns True if `val` has a valid length property, false otherwise
 */
export const isArrLike = (val: unknown): val is ArrayLike<unknown> => {
  return (
    typeof val === "string" ||
    (isObj(val) && "length" in val && isLength(val.length))
  );
};
