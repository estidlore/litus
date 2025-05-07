# subtract

Calculates the subtraction of two quantities (vectors / scalars)

**Arguments**

- `a: Quantity`
- `b: Quantity`

**Returns**

`Calc<A>`

**Usage**

```ts
import * as _ from "litus";

_.subtract([-4, 1, 0, 3, 2], 1);
// => [-5, 0, -1, 2, 1]
_.subtract([1, 2], [3, 4]);
// => [-2, -2]
```
