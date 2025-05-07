# merge

Creates a strongly-typed object from the shallow merge of the deep copies of
two objects.
If both objects have the same property, the first value will be overwritten.

**Arguments**

- `a: A`
- `b: B`

**Returns**

`A & B`

**Usage**

```ts
import * as _ from "litus";

_.merge({ age: 18, name: "John" }, { age: 20 });
// => { age: 20, name: "John" }
```
