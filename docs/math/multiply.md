# multiply

Calculates the multiplication of given quantities (vectors / scalars).

**Arguments**

- `...q: Quantity[]`

**Returns**

`Calc<A>`

**Usage**

```ts
import * as _ from "litus";

_.multiply([-4, 1, 0, 3, 2], 3);
// => [-12, 3, 0, 9, 6]
_.multiply([1, 2], [3, 4]);
// => [3, 8]
```
