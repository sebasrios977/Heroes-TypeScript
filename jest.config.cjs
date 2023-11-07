/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.ts'],
  setupFilesAfterEnv: ["jest-extended/all"],
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["/node_modules/(?!query-string)/"],

};