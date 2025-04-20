# Array

```ts
import { arr } from "litus";
```

## Content

- [arr.chunk](#arrchunk)
- [arr.fill](#arrfill)
- [arr.find](#arrfind)
- [arr.findAll](#arrfindall)
- [arr.findAllIdx](#arrfindallidx)
- [arr.findIdx](#arrfindidx)
- [arr.from](#arrfrom)
- [arr.group](#arrgroup)
- [arr.max](#arrmax)
- [arr.min](#arrmin)
- [arr.range](#arrrange)
- [arr.sort](#arrsort)
- [arr.transpose](#arrtranspose)
- [arr.union](#arrunion)
- [arr.unique](#arrunique)
- [Other docs](#other-docs)

## arr.chunk

Splits an array in several sub-arrays of given size.

**Arguments**

- `arr: T[]`
- `size: number`

**Returns**

`T[][]`

**Usage**

```ts
arr.chunk([1, 2, 3, 4], 2);
// => [[1, 2], [3, 4]]
arr.chunk([1, 2, 3], 2);
// => [[1, 2], [3]]
```

## arr.fill

Creates an array with a value repeated n times.

**Arguments**

- `n: number`
- `val: T`

**Returns**

`T[]`

**Usage**

```ts
arr.fill(2, "a");
// => ["a", "a"]
```

## arr.find

Finds the first element that matches a given condition

**Arguments**

- `arr: T[]`
- `predicate: Predicate<T>`
- `from = 0`
- `to = arr.length`

**Usage**

```ts
const objs = [
  { color: "red", size: "S" },
  { color: "green", size: "M" },
  { color: "blue", size: "L" },
  { color: "red", size: "XL" }
];

arr.find(objs, (el) => el.color === "red");
// => { color: "red", size: "S" }
arr.find(objs, (el) => el.color === "red", 2);
// => { color: "red", size: "XL" }
arr.find(objs, (el) => el.color === "red", 1, 3);
// => undefined
```

## arr.findAll

Finds all the elements that match a given condition

**Arguments**

- `arr: T[]`
- `predicate: Predicate<T>`
- `from = 0`
- `to = arr.length`
- `limit = arr.length`

**Returns**

`T[]`

**Usage**

```ts
const objs = [
  { color: "red", size: "S" },
  { color: "green", size: "M" },
  { color: "blue", size: "L" },
  { color: "red", size: "XL" }
];

arr.findAll(objs, (el) => el.color === "red");
// => [{ color: "red", size: "S" }, { color: "red", size: "XL" }]
```

## arr.findAllIdx

Finds the index of all the elements that match a given condition

**Arguments**

- `arr: T[]`
- `predicate: Predicate<T>`
- `from = 0`
- `to = arr.length`
- `limit = arr.length`

**Returns**

`number[]`

**Usage**

```ts
const objs = [
  { color: "red", size: "S" },
  { color: "green", size: "M" },
  { color: "blue", size: "L" },
  { color: "red", size: "XL" }
];

arr.findAllIdx(objs, (el) => el.color === "red");
// => [0, 3]
```

## arr.findIdx

Finds the index of the first element that matches a given condition

**Arguments**

- `arr: T[]`
- `predicate: Predicate<T>`
- `from = 0`
- `to = arr.length`

**Returns**

`number`

**Usage**

```ts
const objs = [
  { color: "red", size: "S" },
  { color: "green", size: "M" },
  { color: "blue", size: "L" },
  { color: "red", size: "XL" }
];

arr.findIdx(objs, (el) => el.color === "red");
// => 0
arr.findIdx(objs, (el) => el.color === "red", 2);
// => 3
arr.findIdx(objs, (el) => el.color === "red", 1, 3);
// => -1
```

## arr.from

Creates an array of size n with a custom map function

**Arguments**

- `n: number`
- `mapFn: (i: number) => T`

**Returns**

`T[]`

**Usage**

```ts
arr.from(5, (i) => i % 3);
// => [0, 1, 2, 0, 1]
```

## arr.group

Converts an array into an object where each key is a group and its value is an
array of their items

**Arguments**

- `arr: T[]`
- `getKey: (obj: T) => K`

**Returns**

`Record<K, T[]>`

**Usage**

```ts
const objs = [
  { color: "red", size: "S" },
  { color: "green", size: "M" },
  { color: "blue", size: "L" },
  { color: "red", size: "XL" }
];

arr.group(objs, (el) => el.color);
// => { "red": [...], "green": [...], "blue": [...] }
```

## arr.max

Finds the element with the maximum value

**Arguments**

- `arr: T[]`
- `fn: (val: T) => number`

**Returns**

`T`

**Usage**

```ts
const people = [
  { age: 18, name: "John" },
  { age: 30, name: "Jane" }
];

arr.max(people, (el) => el.age);
// => { age: 30, name: "Jane" }
```

## arr.min

Finds the element with the minimum value

**Arguments**

- `arr: T[]`
- `fn: (val: T) => number`

**Returns**

`T`

**Usage**

```ts
const people = [
  { age: 18, name: "John" },
  { age: 30, name: "Jane" }
];

arr.min(people, (el) => el.age);
// => { age: 18, name: "John" }
```

## arr.range

Creates an array of numbers between `start` and `end` (`[start, end)`) with
optional `step`.

**Arguments**

- `a: number`
- `b: number`
- `step = 1`

**Returns**

`number[]`

**Usage**

```ts
arr.range(0, 5);
// => [0, 1, 2, 3, 4]
arr.range(0, 5, 2);
// => [0, 2, 4]
```

## arr.sort

Sorts an array with a given score function

**Arguments**

- `arr: T[]`
- `mapFn: (el: T) => number | string`

**Returns**

`T[]`

**Usage**

```ts
const people = [
  { age: 18, name: "John" },
  { age: 30, name: "Jane" }
];

arr.sort([3, 1, 2], (n) => n);
// => [1, 2, 3]
arr.sort(people, (el) => -el.age);
// => [{ age: 30, name: "Jane" }, { age: 18, name: "John" }]
```

## arr.transpose

Switches the axes of a 2D array. It also works as a "zip" function

**Arguments**

- `matrix: T[][]`

**Returns**

`T[][]`

**Usage**

```ts
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
arr.transpose(matrix);
// => [[1, 4], [2, 5], [3, 6]]
```

## arr.union

Creates a set with the unique values of all given arrays

**Arguments**

- `...arrs: T[][]`

**Returns**

`Set<T>`

**Usage**

```ts
arr.union([1, 2], [2, 3]);
// => {1, 2, 3}
```

## arr.unique

Creates an array of the unique values of given array

**Arguments**

- `arr: T[]`

**Returns**

`T[]`

**Usage**

```ts
arr.unique([3, 3, 1, 2, 2, 3]);
// => [3, 1, 2]
```

## Other docs

- Arrays (this)
- [Functions](https://github.com/estidlore/litus/blob/main/docs/Function.md)
- [Math](https://github.com/estidlore/litus/blob/main/docs/Math.md)
- [Objects](https://github.com/estidlore/litus/blob/main/docs/Object.md)
