# equal

Makes a deep comparison between the given objects

`Since v1.2.1`

## Arguments

- `...objs: unknown[]`

## Returns

`boolean`

## Usage

```ts
import * as _ from "litus";

_.equal({ age: 18, name: ["John", "Doe"] }, { age: 18, name: ["John", "Doe"] });
// => true
```

## Related Functions

- [isObj](isObj.md) (dependency)
- [keys](keys.md) (dependency)
- [union](../array/union.md) (dependency)
- [unapply](../function/unapply.md) (dependency)
- [copy](copy.md)
