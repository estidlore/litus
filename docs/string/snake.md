# snake

Converts a string to snake_case. It splits the string into words, turns them
into lowercase and then joins them together with the "\_" separator.

`Since v1.4.0`

## Arguments

- `str: string` - The input string to be converted to snake_case.

## Returns

`string` - The snake_case version of the input string.

## Usage

```ts
import * as _ from "litus";

_.snake("Hello World");
// => "hello_world"
_.snake("HelloWorld");
// => "hello_world"
_.snake("hello_world");
// => "hello_world"
_.snake("helloITWorld");
// => "hello_it_world"
```

## Related Functions

- [camel](camel.md)
- [kebab](kebab.md)
- [pascal](pascal.md)
