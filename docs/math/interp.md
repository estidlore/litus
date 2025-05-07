# interp

Calculates the linear interpolation of monotolically increasing points (xp, fp).

**Arguments**

- `x: number[]`
- `xp: number[]` - Must be increasing
- `fp: number[]` - Must be increasing and same size of `xp`.

**Returns**

**Usage**

```ts
import * as _ from "litus";

const ix = _.interp([0, 1, 1.5, 2.72, 3.1], [1, 2, 3], [3, 2, 0]);
// => aprox: [3, 3, 2.5, 0.56, 0]
```
