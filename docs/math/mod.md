# mod

Calculates the modulo of two quantities (vectors / scalars)

**Arguments**

- `x: Quantity`
- `modulo: Quantity`

**Returns**

`Calc<A>`

**Usage**

```ts
import * as _ from "litus";

_.mod(5, 3);
// => 2
_.mod(-5, 3);
// => 1
_.mod([2, 3, 4], 3);
// => [2, 0, 1]
_.mod(3, [2, 3, 4]);
// => [1, 0, 3]
_.mod([4, 5], [2, 3]);
// => [0, 2]
```
