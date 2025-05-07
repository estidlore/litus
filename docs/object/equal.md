# equal

Makes a deep comparison between the given objects

**Arguments**

- `...objs: unknown[]`

**Returns**

`boolean`

**Usage**

```ts
import * as _ from "litus";

_.equal({ age: 18, name: ["John", "Doe"] }, { age: 18, name: ["John", "Doe"] });
// => true
```
