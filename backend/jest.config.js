export default {
  testEnvironment: "node",
  transform: {},
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html", "lcov"],
  setupFilesAfterEnv: ["<rootDir>/tests/setupConfig.js"],
};
