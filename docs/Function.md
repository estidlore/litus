# Function

## Content

- [Import](#import)
- [func.apply](#funcapply)
- [func.curry](#funccurry)
- [func.debounce](#funcdebounce)
- [func.memo](#funcmemo)
- [func.throttle](#functhrottle)
- [func.unapply](#funcunapply)
- [Other docs](#other-docs)

## Import

**Import everything**

```ts
import * as _ from "litus";
```

**Import function utils only**

```ts
import { func } from "litus";
```

**Import needed utils only**

```ts
import { memo, throttle } from "litus";
```

## func.apply

Given a function that receives a spread arg (`...args: T[]`), it creates
a new function without spread arg (`args: T[]`).
It's the opposite of [func.unapply](#funcunapply).

**Arguments**

- `fn: (...args: T[]) => R`

**Returns**

`(arg: T[]) => R`

**Usage**

```ts
_.apply((...nums: number[]): void => {});
// => (nums: number[]): void => {}
```

## func.curry

Given a function with several args, creates a new function that can be called
with partial args and returns another function with remaining args until
all the args are passed, then it returns the response of original function.

**Arguments**

- `fn: (...args: T) => R`
- `arity: number = fn.length`

**Returns**

`function`

**Usage**

```ts
const fn = (a: string, b: number, c: boolean): string => {
  return `${a}.${b}-${c ? "T" : "F"}`;
};
let curried = _.curry(fn);
curried = curried("Hi");
// => (b: number, c: boolean): string => { ... }
curried(1, true);
// => Hi.1-T
```

## func.debounce

Given a function, creates a new function that if it's called multiple times
consecutively, only the last call is executed.
See also [func.throttle](#functhrottle).

**Arguments**

- `fn: (...args: A) => void`
- `delay: number = 100`

**Returns**

`(...args: A) => void`

**Usage**

```ts
const search = _.debounce((input: string) => { ... }, 300);
search("C"); // ignored
search("Co"); // ignored
search("Com"); // ignored
search("Comp"); // ignored
search("Compu"); // ignored
search("Comput"); // ignored
search("Compute"); // ignored
search("Computer"); // called after 300ms
```

## func.memo

Creates a function that caches the output to speed up complex computations. It
also receives an optional function to get the cache id of given args and an
optional ttl in ms to expire the cache.

**Arguments**

- `fn: (...args: T) => R`
- `idFn: (arg: T) => Primitive = JSON.stringify`
- `ttl?: number`

**Returns**

`(...args: T) => R`

**Usage**

```ts
const fibonacci = _.memo((n: number): number { ... });
fibonacci(99); // called
fibonacci(99); // not called, output of 99 is cached
```

## func.throttle

Given a function, creates a new function that if it's called multiple times
consecutively, it executes the original function only when it's called after
`interval` ms since last execution, the calls between them are ignored.
See also [func.debounce](#funcdebounce).

**Arguments**

- `fn: (...args: A) => void`
- `interval = 100`

**Returns**

`(...args: A) => void`

**Usage**

```ts
const handleMouseMove = _.throttle((ev) => { ... }, 100);
handleMouseMove(ev); // 0 ms - called
handleMouseMove(ev); // 30 ms - ignored
handleMouseMove(ev); // 60 ms - ignored
handleMouseMove(ev); // 90 ms - ignored
handleMouseMove(ev); // 120 ms - called
```

## func.unapply

Given a function that receives an array arg (`arg: T[]`), it creates
a new function with spread arg (`...args: T[]`).
It's the opposite of [func.apply](#funcapply).

**Arguments**

- `fn: (arg: T[]) => R`

**Returns**

`(...args: T[]) => R`

**Usage**

```ts
_.unapply((nums: number[]): void => {});
// => (...nums: number[]): void => {}
```

## Other docs

- [Arrays](https://github.com/estidlore/litus/blob/main/docs/Array.md)
- Functions (this)
- [Math](https://github.com/estidlore/litus/blob/main/docs/Math.md)
- [Objects](https://github.com/estidlore/litus/blob/main/docs/Object.md)
