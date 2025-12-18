import { unapply } from "/func/unapply";

import { isObj } from "./isObj";
import { keys } from "./keys";

export const shallowEqual = (arr: unknown[]): boolean => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) return false;
  }
  return true;
};

const deepEqual = (args: unknown[]): boolean => {
  if (shallowEqual(args)) return true;
  for (let i = 0; i < args.length; i++) {
    if (!isObj(args[i])) return false;
  }
  const isArr = Array.isArray(args[0]);
  for (let i = 1; i < args.length; i++) {
    if (Array.isArray(args[i]) !== isArr) return false;
  }

  if (isArr) {
    const arrs = args as unknown[][];
    const size = arrs[0].length;
    for (let i = 1; i < arrs.length; i++) {
      if (arrs[i].length !== size) return false;
    }
    const vals = Array<unknown>(arrs.length);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < arrs.length; j++) {
        vals[j] = arrs[j][i];
      }
      if (!deepEqual(vals)) return false;
    }
    return true;
  }

  const objs = args as Record<string, unknown>[];
  const objKeys = keys(objs[0]);
  const keysSet = new Set(objKeys);
  for (let i = 0; i < objs.length; i++) {
    const mKeys = keys(objs[i]);
    if (mKeys.length !== objKeys.length) return false;
    for (let j = 0; j < mKeys.length; j++) {
      if (!keysSet.has(mKeys[j])) return false;
    }
  }
  const vals = Array<unknown>(objs.length);
  for (let i = 0; i < objKeys.length; i++) {
    for (let j = 0; j < objs.length; j++) {
      vals[j] = objs[j][objKeys[i]];
    }
    if (!deepEqual(vals)) return false;
  }
  return true;
};

/**
 * Performs a deep comparison between multiple objects to determine if they are equal
 * @param objs Objects to compare
 * @returns True if all objects are deeply equal, false otherwise
 */
export const equal = unapply(deepEqual);
