# range

Creates an array of numbers between `start` and `end` (`[start, end)`) with
optional `step`.

**Arguments**

- `a: number`
- `b: number`
- `step = 1`

**Returns**

`number[]`

**Usage**

```ts
import * as _ from "litus";

_.range(0, 5);
// => [0, 1, 2, 3, 4]
_.range(0, 5, 2);
// => [0, 2, 4]
```
