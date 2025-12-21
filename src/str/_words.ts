export const words = (str: string): string[] => {
  return str.match(/[A-Z]{2,}(?=[A-Z][a-z])|[A-Z]?[a-z]+|[A-Z]+|[0-9]+/g) ?? [];
};
