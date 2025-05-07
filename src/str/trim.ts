export const trim = (str: string, chars = " ") => {
  const reg = new RegExp(`^[${chars}]+|[${chars}]+$`, "g");
  return str.replace(reg, "");
};
