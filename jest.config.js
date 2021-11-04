module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/__mocks__/styleMock.js',
    '\\.(css|scss)$': '<rootDir>/src/tests/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.js"
  ],
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: "jsdom"
};
