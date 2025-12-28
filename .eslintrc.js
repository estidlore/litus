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
      files: ["test/**"],
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
  root: true,
  rules: {
    "@typescript-eslint/prefer-for-of": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports
          ["^\\u0000"],
          // Node.js builtins
          ["^node:"],
          // External packages
          ["^@?\\w"],
          // Internal packages
          ["^/"],
          // Relative imports
          ["^\\."]
        ]
      }
    ]
  }
};
