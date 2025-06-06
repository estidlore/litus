# unapply

Given a function that receives an array arg (`arg: T[]`), it creates
a new function with spread arg (`...args: T[]`).

`Since v1.1.0`

## Arguments

- `fn: (arg: T[]) => R`

## Returns

`(...args: T[]) => R`

## Usage

```ts
import * as _ from "litus";

_.unapply((nums: number[]): void => {});
// => (...nums: number[]): void => {}
```

## Related Functions

- [equal](../object/equal.md) (dependent)
- [apply](apply.md)
