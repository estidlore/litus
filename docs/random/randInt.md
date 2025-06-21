# randInt

Returns a random integer between two numbers. Handles both ascending
and descending ranges

`Since v1.5.0`

## Arguments

- `a: number` - The lower bound (inclusive)
- `b: number = 0` - The upper bound (exclusive)

## Returns

`number`

## Usage

```ts
import * as _ from "litus";

_.randInt(1, 5);
// => 1, 2, 3 or 4
_.randInt(5, 1);
// => 1, 2, 3, or 4
_.randInt(3);
// => 0, 1 or 2
_.randInt(3, 3);
// => 3
_.randInt(1);
// => 0
```
