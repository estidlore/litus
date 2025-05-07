import { get } from "/obj/get";

export const template = (str: string, data: object): string => {
  return str.replace(/\{\{([a-zA-Z0-9._]+)\}\}/g, (_, path: string) => {
    return get(data, path, "");
  });
};
