# title

Converts a string to Title Case by capitalizing the first letter of each word
and joining them using spaces

`Since v1.8.0`

## Arguments

- `str: string` - The input string to be converted to Title Case

## Returns

`string` - The Title Case version of the input string

## Usage

```ts
import * as _ from "litus";

_.title("Hello World");
// => "Hello World"
_.title("helloWorld");
// => "Hello World"
_.title("hello_world");
// => "Hello World"
_.title("helloITWorld");
// => "Hello It World"
```

## Related Functions

- [capitalize](capitalize.md) (dependency)
- [lower](lower.md)
- [upper](upper.md)
