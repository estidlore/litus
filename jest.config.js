module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.ts"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["src/index.ts", "src/.*types.*"],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  moduleDirectories: ["node_modules", "src"],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest"
  }
};
