import { unapply } from "/func/unapply";

import { calc } from "./calc";
import { sum } from "./sum";

export const add = calc(unapply(sum));
