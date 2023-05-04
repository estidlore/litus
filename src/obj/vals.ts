import type { Val } from "./types";

const vals = <T extends object>(obj: T): Val<T>[] => {
  return Object.values(obj);
};

export { vals };
