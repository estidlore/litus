# Math

```ts
import { math } from "litus";
```

## math.add (...q: Quantity[])

Calculates the sum of given quantities (vectors / scalars).

```ts
math.add([-4, 1, 0, 3, 2], 5);
// => [1, 6, 5, 8, 7]
math.add([1, 2], [3, 4]);
// => [4, 6]
```

## math.aprox (a, b, precision = 4)

Compares if two numbers are aproximately equal using a custom precision.
Useful to handle float precision issues.

```ts
math.aprox(3.1416, Math.PI);
// => true
math.aprox(3.14, Math.PI);
// => false
math.aprox(3.14, Math.PI, 2);
// => true
```

## math.calc (opFn: (...nums: number[]) => number)

Given an operation function, it creates a new function that calculates the
result of that operation over any combination of quantities (vectors / scalars).
It's the base of `add`, `divide`, `multiply` and `subtract`.

```ts
// fn will receive 3 args (a, b, c). Each can be a vector or a scalar.
const fn = math.calc((a, b, c) => a * b + c);
fn([1, 2], 3, 4);
// => [7, 10]
fn(1, [2, 3, 4], [0, -1, -2]);
// => [2, 2, 2]
```

## math.cumsum (arr: number[])

Calculates the cumulative sum of an array of numbers

```ts
arr.cumsum([-4, 1, 0, 3, 2]);
// => [-4, -3, -3, 0, 2]
```

## math.divide (a: Quantity, b: Quantity)

Calculates the division of two quantities (vectors / scalars)

```ts
math.divide([-4, 1, 0, 3], 2);
// => [-2, 0.5, 0, 1.5]
math.divide([1, 2], [3, 4]);
// => [1 / 3, 0.5]
```

## inRange (n: number, a = 0, b)

Checks if a number is in a half-open range `[a, b)`

```ts
math.inRange(3, 1, 5);
// => true
math.inRange(0, 5);
// => true
math.inRange(5, 5);
// => false
```

## math.interp (x: number[], xp: number[], fp: number[])

Calculates the linear interpolation of monotolically increasing points (xp, fp).
`xp` and `fp` must be always increasing.

```ts
const ix = math.interp([0, 1, 1.5, 2.72, 3.1], [1, 2, 3], [3, 2, 0]);
// => aprox: [3, 3, 2.5, 0.56, 0]
```

## math.mean (arr: number[], weights?: number[])

Calculates the mean of an array of numbers

```ts
const nums = [-4, 1, 0, 3, 2];
math.mean(nums);
// => 2 / 5
const meanw = math.mean(nums, [1, 2, 3, 4, 5]);
// => 20 / 15
```

## math.median (arr: number[], weights?: number[])

Calculates the median of an array of numbers

```ts
math.median([-4, 1, 0, 3, 2]);
// => 1
math.median([1, 0, 3, 2]);
// => 1.5
```

## math.mod (x, m)

Calculates the positive mod (%) of a number

```ts
math.mod(5, 3);
// => 2
math.mod(-5, 3);
// => 1
```

## math.multiply (...q: Quantity[])

Calculates the multiplication of given quantities (vectors / scalars).

```ts
math.multiply([-4, 1, 0, 3, 2], 3);
// => [-12, 3, 0, 9, 6]
math.multiply([1, 2], [3, 4]);
// => [3, 8]
```

## math.percentile (x: number[], p: T, weights?: number[])

Calculates given percentile(s) of an array of numbers.
If weights (occurrences) are provided, it returns weighted percentiles;
otherwise, it returns the linear interpolation of percentiles.

```ts
math.percentile([1, 2, 3, 4, 5], [10, 25]);
// => [1.4, 2]
```

## math.pow (arr: number[], exp: number)

Calculates the power of array of numbers to the given exponent

```ts
math.pow([-4, 1, 0, 3, 2], 2);
// => [16, 1, 0, 9, 4]
```

## math.round (q: Quantity, precision = 0)

Rounds a quantity (vector / scalar) to given precision decimals

```ts
math.round([-72, 57.6, -1.024]);
// => [-72, 58, -1]
math.round([-72, 57.6, -1.024], 2);
// => [-72, 57.6, -1.02]
```

## math.subtract (a: Quantity, b: Quantity)

Calculates the subtraction of two quantities (vectors / scalars)

```ts
math.subtract([-4, 1, 0, 3, 2], 1);
// => [-5, 0, -1, 2, 1]
math.subtract([1, 2], [3, 4]);
// => [-2, -2]
```

## math.sum (arr: number[])

Calculates the sum of an array of numbers

```ts
math.sum([-4, 1, 0, 3, 2]);
// => 2
```
