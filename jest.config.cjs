/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// eslint-disable-next-line no-undef

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['node_modules', 'src/database', 'src/test', 'src/types'],
  reporters: ['default', 'jest-junit'],
  globals: { 'ts-jest': { diagnostics: false } },
  transform: {},
}
