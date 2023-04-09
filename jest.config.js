module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.ts"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["src/index.ts", "src/.*types.*"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  moduleDirectories: ["node_modules", "src"],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest"
  }
};
