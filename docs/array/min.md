# min

Finds the element with the minimum value

`Since v1.3.1`

## Arguments

- `arr: T[]`
- `fn: (val: T) => number`

## Returns

`T`

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

- [max](max.md) (dependency)
