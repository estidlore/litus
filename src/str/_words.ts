export const words = (str: string): string[] => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Split camelCase and PascalCase
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Split UPPERPascal > UPPER Pascal
    .split(/[_-\s]+/)
    .filter(Boolean);
};
