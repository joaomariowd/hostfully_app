export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
      "^.+\\.tsx?$": "ts-jest" 
  // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.ts",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
}