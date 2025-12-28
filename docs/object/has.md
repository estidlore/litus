# has

Checks if an object has all the given properties

`Since v1.0.0`

## Arguments

- `obj: object` - Object to check
- `...keys: PropertyKey[]` - Property keys to look for

## Returns

`boolean` - True if all keys exist on the object, false otherwise

## Usage

```ts
import * as _ from "litus";

_.has({ age: 18, name: "John Doe" }, "age", "name");
// => true
_.has({ age: 18, name: "John Doe" }, "height");
// => false
```

## Related Functions

- [get](get.md) (dependent)
- [set](set.md)
