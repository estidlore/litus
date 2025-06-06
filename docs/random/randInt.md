# randInt

Returns a random integer between two numbers, inclusive. Handles both ascending
and descending ranges, as well as floating point inputs.

`Since v1.5.0`

## Arguments

- `a: number = 1` - The lower or upper bound (inclusive).
- `b: number = 0` - The upper or lower bound (inclusive).

## Returns

`number`

## Usage

```ts
import * as _ from "litus";

_.randInt(1, 5);
// => 1, 2, 3, 4, or 5
_.randInt(5, 1);
// => 1, 2, 3, 4, or 5
_.randInt(3);
// => 0, 1, 2, or 3
_.randInt(3, 3);
// => 3
_.randInt();
// => 0 or 1
_.randInt(1.2, 4.8);
// => 2, 3, or 4
```
