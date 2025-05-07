# round

Rounds a quantity (vector / scalar) to given precision decimals

**Arguments**

- `q: Quantity`
- `precision = 0`

**Returns**

`Quantity`

**Usage**

```ts
import * as _ from "litus";

_.round([-72, 57.6, -1.024]);
// => [-72, 58, -1]
_.round([-72, 57.6, -1.024], 2);
// => [-72, 57.6, -1.02]
```
