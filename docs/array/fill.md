# fill

Creates an array with a value repeated n times

`Since v1.0.0`

## Arguments

- `n: number` - Array size
- `val: T` - Value to fill the array with

## Returns

`T[]` - Array containing `val` repeated `n` times

## Usage

```ts
import * as _ from "litus";

_.fill(2, "a");
// => ["a", "a"]
```
