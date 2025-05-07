# divide

Calculates the division of two quantities (vectors / scalars)

**Arguments**

- `a: Quantity`
- `b: Quantity`

**Returns**

`Calc<A>`

**Usage**

```ts
import * as _ from "litus";

_.divide([-4, 1, 0, 3], 2);
// => [-2, 0.5, 0, 1.5]
_.divide([1, 2], [3, 4]);
// => [1 / 3, 0.5]
```
