const semver = require('semver');
const eslintVersion = require('eslint/package.json').version;
const config = require('./config');

// This files is needed to get ESLint 8 `"extends": ["lets-go"],` working
module.exports = {
  ...(semver.gte(eslintVersion, '9.0.0') ? {
    // ESLint 9+ specific rules
    name: 'lets-go',
    plugins: config.plugins,
  } : {
    // ESLint 8 specific rules
    plugins: ['import-x'],
  }),
  rules: config.rules,
};
