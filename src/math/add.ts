import { unapply } from "../func/unapply";
import { calc } from "./calc";
import { sum } from "./sum";

const add = calc(unapply(sum));

export { add };
