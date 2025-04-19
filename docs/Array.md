# Array

```ts
import { arr } from "litus";
```

## arr.chunk (arr, size)

Splits an array in several sub-arrays of given size

```ts
arr.chunk([1, 2, 3, 4], 2);
// => [[1, 2], [3, 4]]
arr.chunk([1, 2, 3], 2);
// => [[1, 2], [3]]
```

## arr.fill (n, val)

Creates an array with a value repeated n times

```ts
arr.fill(2, "a");
// => ["a", "a"]
```

## arr.find (arr, fn: (val) => bool, from = 0, to = arr.length)

Finds the first element that matches a given condition

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

## arr.findAll (arr, fn: (val) => bool, from = 0, to = arr.length, limit = arr.length)

Finds all the elements that match a given condition

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

## arr.findAllIdx (arr, fn: (val) => bool, from = 0, to = arr.length, limit = arr.length)

Finds the index of all the elements that match a given condition

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

## arr.findIdx (arr, fn: (val) => bool, from = 0, to = arr.length)

Finds the index of the first element that matches a given condition

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

## arr.from (n, mapFn: (i) => T)

Creates an array of size n with a custom map function

```ts
arr.from(5, (i) => i % 3);
// => [0, 1, 2, 0, 1]
```

## arr.group (arr, getKey: (obj: T) => K)

Converts an array into an object where each key is a group and its value is an
array of their items

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

## arr.max (arr, fn: (val: T) => number)

Finds the element with the maximum value

```ts
const people = [
  { age: 18, name: "John" },
  { age: 30, name: "Jane" }
];

arr.max(people, (el) => el.age);
// => { age: 30, name: "Jane" }
```

## arr.min (arr, fn: (val: T) => number)

Finds the element with the minimum value

```ts
const people = [
  { age: 18, name: "John" },
  { age: 30, name: "Jane" }
];

arr.min(people, (el) => el.age);
// => { age: 18, name: "John" }
```

## arr.range (start, end, step = 1)

Creates an array of numbers between `start` and `end` (`[start, end)`) with optional `step`

```ts
arr.range(0, 5);
// => [0, 1, 2, 3, 4]
arr.range(0, 5, 2);
// => [0, 2, 4]
```

## arr.sort (arr, mapFn: (el: T) => number | string)

```ts
const people = [
  { age: 18, name: "John" },
  { age: 30, name: "Jane" }
];

arr.sort([3, 1, 2], (n) => n);
// [1, 2, 3]
arr.sort(people, (el) => -el.age);
// [{ age: 30, name: "Jane" }, { age: 18, name: "John" }]
```

## arr.transpose (matrix: T[][])

Switches the axes of a 2D array. It also works as a "zip" function

```ts
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
arr.transpose(matrix);
// => [[1, 4], [2, 5], [3, 6]]
```

## arr.union (...arrs: T[][])

Creates a set with the unique values of all given arrays

```ts
arr.union([1, 2], [2, 3]);
// => {1, 2, 3}
```

## arr.unique

Creates an array of the unique values of given array

```ts
arr.unique([3, 3, 1, 2, 2, 3]);
// => [3, 1, 2]
```
