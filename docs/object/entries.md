# entries

Retrieves a strongly-typed array of the entries (key, value) of an object.

**Arguments**

- `obj: T`

**Returns**

`Entry<T>[]`

**Usage**

```ts
import * as _ from "litus";

_.entries({ age: 18, name: "John" });
// => [["age", 18], ["name", "John"]]
```
