import { union } from "/arr/union";
import { unapply } from "/func/unapply";

import { isObj } from "./isObj";
import { keys } from "./keys";

const deepEqual = (args: unknown[]): boolean => {
  if (args.every((arg) => arg === args[0])) {
    return true;
  }
  if (!args.every(isObj)) {
    return false;
  }
  const objs = args as Record<string, unknown>[];
  const objsKeys = objs.map(keys);
  if (!deepEqual(objsKeys.map((key) => key.length))) {
    return false;
  }
  const keysUnion = union.apply(undefined, objsKeys);
  if (keysUnion.size !== objsKeys[0].length) {
    return false;
  }
  return objsKeys[0].every((key) => {
    const vals = objs.map((obj) => obj[key]);
    return deepEqual(vals);
  });
};

/**
 * Performs a deep comparison between multiple objects to determine if they are equal
 * @param objs Objects to compare
 * @returns True if all objects are deeply equal, false otherwise
 */
export const equal = unapply(deepEqual);
