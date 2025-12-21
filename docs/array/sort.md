# sort

Sorts an array with a given score function

`Since v1.1.0`

## Arguments

- `arr: T[]`
- `mapFn: (el: T) => number | string`

## Returns

`T[]`

## Usage

```ts
import * as _ from "litus";

const people = [
  { age: 18, name: "John" },
  { age: 30, name: "Jane" }
];

_.sort([3, 1, 2], (n) => n);
// => [1, 2, 3]
_.sort(people, (el) => -el.age);
// => [{ age: 30, name: "Jane" }, { age: 18, name: "John" }]
```
