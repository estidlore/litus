# isArrLike

Checks if the provided value is array-like

`Since v1.7.0`

## Arguments

- `val: unknown` - Value to check

## Returns

`boolean` - True if `val` has a valid length property, false otherwise

## Usage

```ts
import * as _ from "litus";

_.isArrLike([1, 2, 3]);
// => true
_.isArrLike("Hi");
// => true
_.isArrLike({ length: 0 });
// => true
_.isArrLike({ 0: "a", length: 1.2 });
// => false
```

## Related Functions

- [isObj](../object/isObj.md) (dependency)
