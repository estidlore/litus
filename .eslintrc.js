module.exports = {
  env: {
    amd: true,
    browser: true
  },
  extends: ["estidlore/react"],
  globals: {
    module: true,
    window: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname
  },
  root: true
};
