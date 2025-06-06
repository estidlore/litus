# inRange

Checks if a number is in a half-open range `[a, b)`

`Since v1.2.1`

## Arguments

- `n: number`
- `a: number`
- `b = 0`

## Returns

`boolean`

## Usage

```ts
import * as _ from "litus";

_.inRange(3, 1, 5);
// => true
_.inRange(0, 5);
// => true
_.inRange(5, 5);
// => false
```
