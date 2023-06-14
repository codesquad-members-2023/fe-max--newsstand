/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
  },
};
