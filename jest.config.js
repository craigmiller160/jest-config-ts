module.exports = {
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '<rootDir>/src/**/*.d.ts'
    ],
    testMatch: [
        '<rootDir>/test/**/*.{test,Spec}.{ts,tsx}'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.json'
        }
    }
};
