# inRange

Checks if a number is in a half-open range `[a, b)`

`Since v1.2.1`

## Arguments

- `n: number` - The number to check
- `a: number` - Start of the range (inclusive)
- `b?: number = 0` - End of the range (exclusive)

## Returns

`boolean` - True if `n` is in `[a, b)`, false otherwise

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
