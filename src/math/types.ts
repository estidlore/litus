export type Quantity = number | number[];

export type QuantityT<T extends Quantity> = T extends number
  ? number
  : number[];

export type Calc<A extends Quantity[]> = A extends number[] ? number : number[];
