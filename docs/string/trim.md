# trim

Removes leading and trailing whitespace or specified characters from a string.

`Since v1.4.0`

## Arguments

- `str: string` - The string to trim.
- `chars?: string` - Optional. The characters to trim from the string. Defaults to whitespace.

## Returns

`string` - The trimmed string.

## Usage

```ts
import * as _ from "litus";

_.trim("  hello  ");
// => "hello"
_.trim("-_hello--", "-_");
// => "hello"
```

## Related Functions

- [split](split.md)
- [template](template.md)
