module.exports = {
  preset: 'ts-jest',
  //testMatch: ["./dist/tests/**/*-tests-v*.js"],
  //testMatch: ["./tests/**/*-tests-v*.ts"],
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: './jest.setup.js'
};