# template

Takes a string containing placeholders in the format `{{path.to.value}}` and
replaces them with corresponding values from the provided data object

`Since v1.4.0`

## Arguments

- `str: string` - The string containing placeholders to be replaced.
- `data: object` - The object containing values to replace the placeholders.

## Returns

`string` - The transformed string with placeholders replaced by their
corresponding values.

## Usage

```ts
import * as _ from "litus";

_.template("{{name.first}} {{name.last}} is {{age}}", {
  age: 18,
  name: { first: "John", last: "Doe" }
});
// => "John Doe is 18"
```

## Related Functions

- [get](../object/get.md) (dependency)
- [split](split.md)
- [trim](trim.md)
