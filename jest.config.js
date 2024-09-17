module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest'
    },
    transformIgnorePatterns: [
      '/node_modules/(?!react-leaflet|leaflet|some-other-modules)'
    ],
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy'
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json'
      }
    }
  };
  