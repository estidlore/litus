# findAll

Finds all the elements that match a given condition

## Arguments

- `arr: T[]`
- `predicate: Predicate<T>`
- `from = 0`
- `to = arr.length`
- `limit = arr.length`

## Returns

`T[]`

## Usage

```ts
import * as _ from "litus";

const objs = [
  { color: "red", size: "S" },
  { color: "green", size: "M" },
  { color: "blue", size: "L" },
  { color: "red", size: "XL" }
];

_.findAll(objs, (el) => el.color === "red");
// => [{ color: "red", size: "S" }, { color: "red", size: "XL" }]
```

## Related Functions

- [findAllIdx](findAllIdx.md) (dependency)
- [find](find.md)
- [findIdx](findIdx.md)
