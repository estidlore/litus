# percentile

Calculates given percentile(s) of an array of numbers.
If weights (occurrences) are provided, it returns weighted percentiles;
otherwise, it returns the linear interpolation of percentiles.

**Arguments**

- `x: number[]`
- `p: T`
- `weights?: number[]`

**Returns**

`number[]`

**Usage**

```ts
import * as _ from "litus";

_.percentile([1, 2, 3, 4, 5], [10, 25]);
// => [1.4, 2]
```
