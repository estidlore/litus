# sort

Sorts an array with a given score function

`Since v1.1.0`

## Arguments

- `arr: T[]` - Array to sort
- `mapFn: (el: T) => number | string` - Function to map each element to a sortable value

## Returns

`T[]` - Sorted array in-place

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
