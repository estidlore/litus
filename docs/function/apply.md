# apply

Given a function that receives a spread arg (`...args: T[]`), it creates
a new function without spread arg (`args: T[]`)

`Since v1.1.0`

## Arguments

- `fn: (...args: T[]) => R` - Function accepting spread arguments

## Returns

`(arg: T[]) => R` - Function accepting an array of arguments

## Usage

```ts
import * as _ from "litus";

_.apply((...nums: number[]): void => {});
// => (nums: number[]): void => {}
```

## Related Functions

- [unapply](unapply.md)
