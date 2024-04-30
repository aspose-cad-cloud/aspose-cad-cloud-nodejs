module.exports = {
  preset: 'ts-jest',
  testMatch: ["***/test/**/*-tests-*v*.ts"],
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: './jest.setup.js'
};