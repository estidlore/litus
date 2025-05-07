# add

Calculates the sum of given quantities (vectors / scalars).

**Arguments**

- `...q: Quantity[]`

**Returns**

`Calc<A>`

**Usage**

```ts
import * as _ from "litus";

_.add([-4, 1, 0, 3, 2], 5);
// => [1, 6, 5, 8, 7]
_.add([1, 2], [3, 4]);
// => [4, 6]
```
