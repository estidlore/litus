module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.ts"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["src/index.ts", "src/.*types.*"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^/(.*)$": "<rootDir>/src/$1"
  },
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest"
  }
};
