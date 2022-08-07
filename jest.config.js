/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // testMatch: [ //匹配测试用例的文件
  //   '<rootDir>/test/*.test.ts'
  // ],
  transform: {
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest'
  },
};