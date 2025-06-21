import { get } from "/obj/get";

/**
 * Replaces placeholders in the format `{{path.to.value}}` within a string
 * with corresponding values from the provided data object
 * @param str String containing placeholders to replace
 * @param data Object with values for the placeholders
 * @returns String with placeholders replaced by their values
 */
export const template = (str: string, data: object): string => {
  return str.replace(/\{\{([a-zA-Z0-9._]+)\}\}/g, (_, path: string) => {
    return get(data, path, "");
  });
};
