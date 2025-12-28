# split

Splits a string by the specified delimiter and returns a strongly-typed array (tuple) of substrings

`Since v1.6.0`

## Arguments

- `str: S` – The string to split
- `delimiter: D` – The delimiter to split by

## Returns

`Split<S, D>` – The array (tuple) of substrings

## Usage

```ts
import * as _ from "litus";

_.split("a,b,c", ",");
// => ["a", "b", "c"]

_.split("hello world", " ");
// => ["hello", "world"]
```

## Related Functions

- [trim](trim.md)
- [template](template.md)
