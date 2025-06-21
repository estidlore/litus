import { fisherYates } from "./_fisherYates";

/**
 * Samples elements from an array randomly, optionally using weights to influence selection
 * @param data Array to sample from
 * @param size Number of elements to sample
 * @param weights Optional array of weights for weighted sampling
 * @returns New array containing the sampled elements
 */
export const sample = fisherYates;
