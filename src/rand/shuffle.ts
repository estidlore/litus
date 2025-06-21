import { fisherYates } from "./_fisherYates";

/**
 * Shuffles an array randomly, optionally using weights to influence the
 * likelihood of selecting elements first
 * @param data Array to shuffle
 * @param weights Optional array of weights for weighted shuffling
 * @returns New array with the elements shuffled
 */
export const shuffle = <T>(data: T[], weights?: number[]): T[] => {
  return fisherYates(data, data.length, weights);
};
