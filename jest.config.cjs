module.exports = {
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  coverageReporters: ["text", "cobertura"],
  preset: "ts-jest",
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
}
