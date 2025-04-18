type Quantity = number | number[];

type QuantityT<T extends Quantity> = T extends number ? number : number[];

type Calc<A extends Quantity[]> = A extends number[] ? number : number[];

export type { Calc, Quantity, QuantityT };
