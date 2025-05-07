# pick

Creates a copy of an object with the specified keys only.

**Arguments**

- `obj: T`
- `keys: K[]`

**Returns**

`Pick<T, K>`

**Usage**

```ts
import * as _ from "litus";

_.pick({ age: 18, name: "John", height: 170 }, ["height"]);
// => { height: 170 }
```
