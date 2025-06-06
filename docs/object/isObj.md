# isObj

Checks if the argument is an object

`Since v1.2.1`

## Arguments

- `el: unknown`

## Returns

`boolean`

## Usage

```ts
import * as _ from "litus";

_.isObj("");
// => false
_.isObj({});
// => true
_.isObj(null);
// => false
```

## Related Functions

- [copy](copy.md) (dependent)
- [equal](equal.md) (dependent)
- [get](get.md) (dependent)
- [set](set.md) (dependent)
