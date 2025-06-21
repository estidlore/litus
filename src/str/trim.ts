/**
 * Removes leading and trailing whitespace or specified characters from a string
 * @param str String to trim
 * @param chars Optional characters to trim from the string. Default: whitespace
 * @returns Trimmed string
 */
export const trim = (str: string, chars = " "): string => {
  const reg = new RegExp(`^[${chars}]+|[${chars}]+$`, "g");
  return str.replace(reg, "");
};
