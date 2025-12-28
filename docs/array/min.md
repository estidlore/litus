# min

Finds the element with the minimum value

`Since v1.3.1`

## Arguments

- `arr: T[]` - Array to search in
- `fn: (val: T) => number` - Function to extract the value for comparison

## Returns

`T` - Element with the minimum value

## Usage

```ts
import * as _ from "litus";

const people = [
  { age: 18, name: "John" },
  { age: 30, name: "Jane" }
];

_.min(people, (el) => el.age);
// => { age: 18, name: "John" }
```

## Related Functions

- [max](max.md)
- [clamp](../math/clamp.md)
