# eslint-config-lets-go

Note: This project is a work in progress.

An ESLint config that aims to help *and not be annoying*. Check index.js for the full list of rules.

## Installation

```bash
npm add -D eslint@8 eslint-config-lets-go eslint-plugin-import-x
```

## Usage

(Recommended) For ESLint 8 `eslint.config.js` and 9+:
```js
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
```

(Not recommended) For ESLint 8 and below:
```js
{
  "extends": ["lets-go"],
  // Override any of the rules
  // rules: {
  //   'no-console': 'warn',
  // }
}
```