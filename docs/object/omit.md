# omit

Creates a copy of an object without the specified keys.

**Arguments**

- `obj: T`
- `keys: K[]`

**Returns**

`Omit<T, K>`

**Usage**

```ts
import * as _ from "litus";

_.omit({ age: 18, name: "John", height: 170 }, ["height"]);
// => { age: 18, name: "John" }
```
