import { fisherYates } from "./_fisherYates";

export const shuffle = <T>(data: T[], weights?: number[]): T[] => {
  return fisherYates(data, data.length, weights);
};
