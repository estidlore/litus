# capitalize

Capitalizes the first letter of a string and converts the rest to lowercase

`Since v1.4.0`

## Arguments

- `str: string` - The string to be capitalized

## Returns

`string` - The transformed string

## Usage

```ts
import * as _ from "litus";

_.capitalize("hello world");
// => "Hello world"
_.capitalize("hElLo");
// => "Hello"
```

## Related Functions

- [camel](capitalize.md) (dependent)
- [pascal](pascal.md) (dependent)
