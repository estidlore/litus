# curry

Given a function with several args, creates a new function that can be called
with partial args and returns another function with remaining args until
all the args are passed, then it returns the response of original function.

## Arguments

- `fn: (...args: T) => R`
- `arity: number = fn.length`

## Returns

`function`

## Usage

```ts
import * as _ from "litus";

const fn = (a: string, b: number, c: boolean): string => {
  return `${a}.${b}-${c ? "T" : "F"}`;
};
let curried = _.curry(fn);
curried = curried("Hi");
// => (b: number, c: boolean): string => { ... }
curried(1, true);
// => Hi.1-T
```
