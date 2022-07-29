module.exports = {
  default: {
    paths  : ['tests/features/**/*.feature'],
    requireModule: [
      'ts-node/register',
    ],
    require: [
      'tests/_configs/index.ts',
      'tests/step_definitions/**/*.ts'
    ],
    publishQuiet: true,
    language: 'en'
  }
};