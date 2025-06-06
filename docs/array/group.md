# group

Converts an array into an object where each key is a group and its value is an
array of their items

`Since v1.0.0`

## Arguments

- `arr: T[]`
- `getKey: (obj: T) => K`

## Returns

`Record<K, T[]>`

## Usage

```ts
import * as _ from "litus";

const objs = [
  { color: "red", size: "S" },
  { color: "green", size: "M" },
  { color: "blue", size: "L" },
  { color: "red", size: "XL" }
];

_.group(objs, (el) => el.color);
// => { "red": [...], "green": [...], "blue": [...] }
```
