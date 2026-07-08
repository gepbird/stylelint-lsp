module.exports = {
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  coverageReporters: ["text", "cobertura"],
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
}
