import { unapply } from "/func/unapply";
import { transpose } from "./transpose";

export const zip = unapply(transpose);
