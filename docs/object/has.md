# has

Checks if an object has all the given properties

## Arguments

- `obj: object`
- `...keys: PropertyKey[]`

## Returns

`boolean`

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
