const { createTransformer } = require('ts-jest').default;

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.d.ts'
  ],
  testMatch: [
    '<rootDir>/test/**/*.{test,Spec}.{ts,tsx}'
  ],
  transform: {
    '^.+\\.tsx?$': createTransformer()
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json'
    }
  }
};
