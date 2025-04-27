# Object

## Content

- [Import](#import)
- [obj.copy](#objcopy)
- [obj.entries](#objentries)
- [obj.equal](#objequal)
- [obj.get](#objget)
- [obj.has](#objhas)
- [obj.isObj](#objisobj)
- [obj.keys](#objkeys)
- [obj.merge](#objmerge)
- [obj.omit](#objomit)
- [obj.pick](#objpick)
- [obj.vals](#objvals)
- [Other docs](#other-docs)

## Import

**Import everything**

```ts
import * as _ from "litus";
```

**Import object utils only**

```ts
import { obj } from "litus";
```

**Import needed utils only**

```ts
import { copy, equal } from "litus";
```

## obj.copy

Creates a deep copy of the provided object or array

**Arguments**

- `obj: T`

**Returns**

`T`

**Usage**

```ts
_.copy({ age: 18, name: "John" });
// => { age: 18, name: "John" }
```

## obj.entries

Retrieves a strongly-typed array of the entries (key, value) of an object.

**Arguments**

- `obj: T`

**Returns**

`Entry<T>[]`

**Usage**

```ts
_.entries({ age: 18, name: "John" });
// => [["age", 18], ["name", "John"]]
```

## obj.equal

Makes a deep comparison between the given objects

**Arguments**

- `...objs: unknown[]`

**Returns**

`boolean`

**Usage**

```ts
_.equal({ age: 18, name: ["John", "Doe"] }, { age: 18, name: ["John", "Doe"] });
// => true
```

## obj.get

Gets a value at nested path of object or array. Returns the fallback value if
the path is not found.

**Arguments**

- `obj: object`
- `path: string`
- `fallback?: T`

**Returns**

`T`

**Usage**

```ts
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

## obj.has

Checks if an object has all the given properties

**Arguments**

- `obj: object`
- `...keys: PropertyKey[]`

**Returns**

`boolean`

**Usage**

```ts
_.has({ age: 18, name: "John Doe" }, "age", "name");
// => true
_.has({ age: 18, name: "John Doe" }, "height");
// => false
```

## obj.isObj

Checks if the argument is an object

**Arguments**

- `el: unknown`

**Returns**

`boolean`

**Usage**

```ts
_.isObj("");
// => false
_.isObj({});
// => true
_.isObj(null);
// => false
```

## obj.keys

Retrieves a strongly-typed array of the keys of an object.

**Arguments**

- `obj: T`

**Returns**

`Key<T>[]`

**Usage**

```ts
_.keys({ age: 18, name: "John" });
// => ["age", "name"]
```

## obj.merge

Creates a strongly-typed object from the shallow merge of the deep copies of
two objects.
If both objects have the same property, the first value will be overwritten.

**Arguments**

- `a: A`
- `b: B`

**Returns**

`A & B`

**Usage**

```ts
_.merge({ age: 18, name: "John" }, { age: 20 });
// => { age: 20, name: "John" }
```

## obj.omit

Creates a copy of an object without the specified keys.

**Arguments**

- `obj: T`
- `keys: K[]`

**Returns**

`Omit<T, K>`

**Usage**

```ts
_.omit({ age: 18, name: "John", height: 170 }, ["height"]);
// => { age: 18, name: "John" }
```

## obj.pick

Creates a copy of an object with the specified keys only.

**Arguments**

- `obj: T`
- `keys: K[]`

**Returns**

`Pick<T, K>`

**Usage**

```ts
_.pick({ age: 18, name: "John", height: 170 }, ["height"]);
// => { height: 170 }
```

## obj.vals

Retrieves a strongly-typed array of the values of an object.

**Arguments**

- `obj: T`

**Usage**

```ts
_.vals({ age: 18, name: "John" });
// => [18, "John"]
```

## Other docs

- [Arrays](https://github.com/estidlore/litus/blob/main/docs/Array.md)
- [Functions](https://github.com/estidlore/litus/blob/main/docs/Function.md)
- [Math](https://github.com/estidlore/litus/blob/main/docs/Math.md)
- Objects (this)
