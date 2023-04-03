module.exports = {
  env: {
    amd: true,
    browser: true
  },
  extends: ["estidlore/typescript"],
  globals: {
    module: true,
    window: true
  },
  overrides: [
    {
      files: ["src/**/index.test.ts"],
      rules: {
        "max-lines-per-function": "off"
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname
  },
  root: true
};
