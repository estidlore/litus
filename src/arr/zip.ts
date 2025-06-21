import { unapply } from "/func/unapply";

import { transpose } from "./transpose";

/**
 * Creates an array of grouped elements, where each group contains the elements
 * at the corresponding index from the input arrays
 * @param arrays Arrays to process
 * @returns Array of grouped elements
 */
export const zip = unapply(transpose);
