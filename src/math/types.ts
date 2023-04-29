type Quantity = number[] | number;

type Calc<A extends Quantity[]> = A extends number[] ? number : number[];

export type { Calc, Quantity };
