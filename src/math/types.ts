type Quantity = number[] | number;

type QuantityT<T extends Quantity> = T extends number ? number : number[];

export type { Quantity, QuantityT };
