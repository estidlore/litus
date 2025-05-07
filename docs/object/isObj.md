# isObj

Checks if the argument is an object

**Arguments**

- `el: unknown`

**Returns**

`boolean`

**Usage**

```ts
import * as _ from "litus";

_.isObj("");
// => false
_.isObj({});
// => true
_.isObj(null);
// => false
```
