# camel

Converts a string to camelCase. It splits the string into words, capitalizes
each word except the first one, and then joins them together without spaces.

`Since v1.4.0`

## Arguments

- `str: string` - The input string to be converted to camelCase.

## Returns

`string` - The camelCase version of the input string.

## Usage

```ts
import * as _ from "litus";

_.camel("Hello World");
// => "helloWorld"
_.camel("HelloWorld");
// => "helloWorld"
_.camel("hello_world");
// => "helloWorld"
_.camel("helloITWorld");
// => "helloItWorld"
```

## Related Functions

- [capitalize](capitalize.md) (dependency)
- [kebab](kebab.md)
- [pascal](pascal.md)
- [snake](snake.md)
