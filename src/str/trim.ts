export const trim = (str: string, chars = " "): string => {
  const reg = new RegExp(`^[${chars}]+|[${chars}]+$`, "g");
  return str.replace(reg, "");
};
