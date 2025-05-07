# keys

Retrieves a strongly-typed array of the keys of an object.

**Arguments**

- `obj: T`

**Returns**

`Key<T>[]`

**Usage**

```ts
import * as _ from "litus";

_.keys({ age: 18, name: "John" });
// => ["age", "name"]
```
