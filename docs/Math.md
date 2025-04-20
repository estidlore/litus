# Math

```ts
import { math } from "litus";
```

## Content

- [math.add](#mathadd)
- [math.aprox](#mathaprox)
- [math.calc](#mathcalc)
- [math.cumsum](#mathcumsum)
- [math.divide](#mathdivide)
- [math.inrange](#mathinrange)
- [math.interp](#mathinterp)
- [math.mean](#mathmean)
- [math.median](#mathmedian)
- [math.mod](#mathmod)
- [math.multiply](#mathmultiply)
- [math.percentile](#mathpercentile)
- [math.pow](#mathpow)
- [math.round](#mathround)
- [math.subtract](#mathsubtract)
- [math.sum](#mathsum)
- [Other docs](#other-docs)

## math.add

Calculates the sum of given quantities (vectors / scalars).

**Arguments**

- `...q: Quantity[]`

**Returns**

`Calc<A>`

**Usage**

```ts
math.add([-4, 1, 0, 3, 2], 5);
// => [1, 6, 5, 8, 7]
math.add([1, 2], [3, 4]);
// => [4, 6]
```

## math.aprox

Compares if two numbers are aproximately equal using a custom precision.
Useful to handle float precision issues.

**Arguments**

- `a: number`
- `b: number`
- `precision = 4`

**Returns**

`boolean`

**Usage**

```ts
math.aprox(3.1416, Math.PI);
// => true
math.aprox(3.14, Math.PI);
// => false
math.aprox(3.14, Math.PI, 2);
// => true
```

## math.calc

Given an operation function, it creates a new function that calculates the
result of that operation over any combination of quantities (vectors / scalars).
It's the base of `add`, `divide`, `multiply` and `subtract`.

**Arguments**

- `opFn: (...nums: T) => number`

**Returns**

- `(...q: Quantity[]) => Calc<T>`

**Usage**

```ts
// fn will receive 3 args (a, b, c). Each can be a vector or a scalar.
const fn = math.calc((a, b, c) => a * b + c);
fn([1, 2], 3, 4);
// => [7, 10]
fn(1, [2, 3, 4], [0, -1, -2]);
// => [2, 2, 2]
```

## math.cumsum

Calculates the cumulative sum of an array of numbers

**Arguments**

- `arr: number[]`

**Returns**

- `number[]`

**Usage**

```ts
arr.cumsum([-4, 1, 0, 3, 2]);
// => [-4, -3, -3, 0, 2]
```

## math.divide

Calculates the division of two quantities (vectors / scalars)

**Arguments**

- `a: Quantity`
- `b: Quantity`

**Returns**

`Calc<A>`

**Usage**

```ts
math.divide([-4, 1, 0, 3], 2);
// => [-2, 0.5, 0, 1.5]
math.divide([1, 2], [3, 4]);
// => [1 / 3, 0.5]
```

## math.inRange

Checks if a number is in a half-open range `[a, b)`

**Arguments**

- `n: number`
- `a: number`
- `b = 0`

**Returns**

`boolean`

**Usage**

```ts
math.inRange(3, 1, 5);
// => true
math.inRange(0, 5);
// => true
math.inRange(5, 5);
// => false
```

## math.interp

Calculates the linear interpolation of monotolically increasing points (xp, fp).

**Arguments**

- `x: number[]`
- `xp: number[]` - Must be increasing
- `fp: number[]` - Must be increasing and same size of `xp`.

**Returns**

**Usage**

```ts
const ix = math.interp([0, 1, 1.5, 2.72, 3.1], [1, 2, 3], [3, 2, 0]);
// => aprox: [3, 3, 2.5, 0.56, 0]
```

## math.mean

Calculates the mean of an array of numbers

**Arguments**

- `arr: number[]`
- `weights?: number[]`

**Returns**

`number`

**Usage**

```ts
const nums = [-4, 1, 0, 3, 2];
math.mean(nums);
// => 2 / 5
const meanw = math.mean(nums, [1, 2, 3, 4, 5]);
// => 20 / 15
```

## math.median

Calculates the median of an array of numbers

**Arguments**

- `arr: number[]`
- `weights?: number[]`

**Returns**

`number`

**Usage**

```ts
math.median([-4, 1, 0, 3, 2]);
// => 1
math.median([1, 0, 3, 2]);
// => 1.5
```

## math.mod

Calculates the positive mod (%) of a number

**Arguments**

- `x: number`
- `m: number`

**Returns**

`number`

**Usage**

```ts
math.mod(5, 3);
// => 2
math.mod(-5, 3);
// => 1
```

## math.multiply

Calculates the multiplication of given quantities (vectors / scalars).

**Arguments**

- `...q: Quantity[]`

**Returns**

`Calc<A>`

**Usage**

```ts
math.multiply([-4, 1, 0, 3, 2], 3);
// => [-12, 3, 0, 9, 6]
math.multiply([1, 2], [3, 4]);
// => [3, 8]
```

## math.percentile

Calculates given percentile(s) of an array of numbers.
If weights (occurrences) are provided, it returns weighted percentiles;
otherwise, it returns the linear interpolation of percentiles.

**Arguments**

- `x: number[]`
- `p: T`
- `weights?: number[]`

**Returns**

`number[]`

**Usage**

```ts
math.percentile([1, 2, 3, 4, 5], [10, 25]);
// => [1.4, 2]
```

## math.pow

Calculates the power of array of numbers to the given exponent

**Arguments**

- `arr: number[]`
- `exp: number`

**Returns**

`number[]`

**Usage**

```ts
math.pow([-4, 1, 0, 3, 2], 2);
// => [16, 1, 0, 9, 4]
```

## math.round

Rounds a quantity (vector / scalar) to given precision decimals

**Arguments**

- `q: Quantity`
- `precision = 0`

**Returns**

`Quantity`

**Usage**

```ts
math.round([-72, 57.6, -1.024]);
// => [-72, 58, -1]
math.round([-72, 57.6, -1.024], 2);
// => [-72, 57.6, -1.02]
```

## math.subtract

Calculates the subtraction of two quantities (vectors / scalars)

**Arguments**

- `a: Quantity`
- `b: Quantity`

**Returns**

`Calc<A>`

**Usage**

```ts
math.subtract([-4, 1, 0, 3, 2], 1);
// => [-5, 0, -1, 2, 1]
math.subtract([1, 2], [3, 4]);
// => [-2, -2]
```

## math.sum

Calculates the sum of an array of numbers

**Arguments**

- `arr: number[]`

**Returns**

`number`

**Usage**

```ts
math.sum([-4, 1, 0, 3, 2]);
// => 2
```

## Other docs

- [Arrays](https://github.com/estidlore/litus/blob/main/docs/Array.md)
- [Functions](https://github.com/estidlore/litus/blob/main/docs/Function.md)
- Math (this)
- [Objects](https://github.com/estidlore/litus/blob/main/docs/Object.md)
