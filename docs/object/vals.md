# vals

Retrieves a strongly-typed array of the values of an object.

**Arguments**

- `obj: T`

**Usage**

```ts
import * as _ from "litus";

_.vals({ age: 18, name: "John" });
// => [18, "John"]
```
