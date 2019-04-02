module.exports = {
    moduleFileExtensions: [
        "js",
        "jsx"
    ],
    moduleDirectories: [
        "node_modules",
        "bower_components",
        "shared"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    coverageReporters: ["json", "html"],
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/index.js',
        '!**/node_modules/**',
        '!**/vendor/**'
    ],
    coverageDirectory: '<rootDir>/coverage',
    snapshotSerializers: ["enzyme-to-json/serializer"]
};