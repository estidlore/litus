# get

Gets a value at nested path of object or array. Returns the fallback value if
the path is not found

`Since v1.3.1`

## Arguments

- `obj: object`
- `path: string`
- `fallback?: T`

## Returns

`T`

## Usage

```ts
import * as _ from "litus";

const person = {
  birth: { day: 1, month: 2, year: 2000 },
  name: ["John", "Doe"]
};
_.get(person, "birth");
// => { day: 1, month: 2, year: 2000 }
_.get(person, "name.0");
// => "John"
_.get(person, "height", 0);
// => 0
```

## Related Functions

- [has](has.md) (dependency)
- [isObj](isObj.md) (dependency)
- [template](../string/template.md) (dependent)
- [set](set.md)
