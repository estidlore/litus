# first

Returns the first element of an array

`Since v1.6.0`

## Arguments

- `arr: A` – The array

## Returns

`First<A>` – The first element, or undefined if the array is empty

## Usage

```ts
import * as _ from "litus";

_.first(["a", "b", "c"]);
// => "a"
_.first([]);
// => undefined
```

## Related Functions

- [last](last.md)
