module.exports = {
  default: {
    paths  : ['tests/features/**/*.feature'],
    require: [
      'tests/_configs/hooks.js',
      'tests/step_definitions/**/*.js'
    ],
    publishQuiet: true,
    language: 'en'
  }
};