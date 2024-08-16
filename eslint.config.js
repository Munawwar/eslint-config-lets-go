// eslint.config.js
const letsGo = require("eslint-config-lets-go/config");
// eslint-disable-next-line import-x/no-extraneous-dependencies
const globals = require("globals");

module.exports = [
  letsGo,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module", // or "commonjs",
      globals: {
        ...globals.node,
        ...globals.nodeBuiltins,
        // or ...globals.browser,
      }
    },
    // Override any of the rules
    // rules: {
    //   'no-console': 'warn',
    //   'no-shadow': ['error', {
    //     'allow': ['err', 'resolve', 'reject', 'done']
    //   }],
    // }
  }
];