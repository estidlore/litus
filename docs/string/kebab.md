# kebab

Converts a string to kebab-case. It splits the string into words, turns them
into lowercase and then joins them together with the "-" separator

`Since v1.4.0`

## Arguments

- `str: string` - The input string to be converted to kebab-case

## Returns

`string` - The kebab-case version of the input string

## Usage

```ts
import * as _ from "litus";

_.kebab("Hello World");
// => "hello-world"
_.kebab("HelloWorld");
// => "hello-world"
_.kebab("hello_world");
// => "hello-world"
_.kebab("helloITWorld");
// => "hello-it-world"
```

## Related Functions

- [camel](camel.md)
- [pascal](pascal.md)
- [snake](snake.md)
