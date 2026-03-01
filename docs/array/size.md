# size

Gets the size of a value. Returns the length or size property if found or the
number of own keys for objects

`Since v1.7.0`

## Arguments

`val: unknown` - The value to inspect

## Returns

`number` - The size of the value

## Usage

```ts
import * as _ from "litus";

_.size("hello");
// => 5
_.size([1, 2, 4]);
// => 3
_.size({ 0: "a", 1: "b", length: 2 });
// => 2
_.size(new Set([1, 2, 3]));
// => 3
_.size({ 0: "a", 1: "b", length: "2" });
// => 3
```

## Related Functions

- [isObj](../object/isObj.md) (dependent)
