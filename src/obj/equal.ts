import { union } from "arr/union";
import { unapply } from "func/unapply";

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
  const keysUnion = union.apply(this, objsKeys);
  if (keysUnion.size !== objsKeys[0].length) {
    return false;
  }
  return objsKeys[0].every((key) => {
    const vals = objs.map((obj) => obj[key]);
    return deepEqual(vals);
  });
};

const equal = unapply(deepEqual);

export { equal };
