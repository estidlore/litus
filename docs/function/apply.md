# apply

Given a function that receives a spread arg (`...args: T[]`), it creates
a new function without spread arg (`args: T[]`).

## Arguments

- `fn: (...args: T[]) => R`

## Returns

`(arg: T[]) => R`

## Usage

```ts
import * as _ from "litus";

_.apply((...nums: number[]): void => {});
// => (nums: number[]): void => {}
```

## Related Functions

- [unapply](unapply.md)
