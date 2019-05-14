module.exports = {
    moduleFileExtensions: [
        "js",
        "jsx"
    ],
    moduleDirectories: [
        "node_modules",
        "bower_components",
        "shared",
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "^components(.*)$": "<rootDir>/src/components$1",
        "^features(.*)$": "<rootDir>/src/features$1",
        "^services(.*)$": "<rootDir>/src/services$1",
        "^utils(.*)$": "<rootDir>/src/utils$1",
    },
    testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    coverageReporters: ["json", "html"],
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/index.tsx',
        '!src/configureStore.js',
        '!**/node_modules/**',
        '!**/vendor/**'
    ],
    coverageDirectory: '<rootDir>/coverage',
    snapshotSerializers: ["enzyme-to-json/serializer"]
};