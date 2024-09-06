module.exports = {
  preset: 'ts-jest',
  testMatch: ["***/test/**/*-tests-*v*.ts"],
  testEnvironment: 'node',
  bail: true,
  verbose: true,
  setupFilesAfterEnv:  ['./jest.setup.js']
};