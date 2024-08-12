module.exports = {
  preset: 'ts-jest',
  testMatch: ["***/test/**/*-tests-*v*.ts"],
  testEnvironment: 'node',
  bail: 1,
  verbose: true,
  setupFilesAfterEnv:  ['./jest.setup.js']
};