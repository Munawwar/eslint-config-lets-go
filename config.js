const importX = require('eslint-plugin-import-x');

module.exports = {
  name: 'lets-go',
  plugins: {
    'import-x': importX,
  },
  rules: {
    // --- Footguns ---
    // Trying to re-assign a constant is obviously a mistake
    'no-const-assign': 'error',
    // Expressions that are always true or false is either a copy-pasta issue
    // or you're not paying attention while coding
    'no-constant-condition': 'error',
    // Another possible copy-pasta issue
    'no-dupe-keys': 'error',
    // Adding a string argument to setTimeout() causes an eval(). This is most likely a mistake
    'no-implied-eval': 'error',
    // Many a times, shadowing happens because you didn't pay attention that
    // another variable was already defined.
    // Making an exception for variable named 'err', 'resolve', 'reject' and 'done' as they are used frequently as names.
    'no-shadow': ['error', {
      'allow': ['err', 'resolve', 'reject', 'done']
    }],
    'no-shadow-restricted-names': 'error',
    // Catch typos by checking for undefined variables
    'no-undef': 'error',
    // using variable before being defined is most likely a copy-pasta issue
    'no-use-before-define': 'error',

    // -- Footguns caught by import-x ---
    // Ensures imports point to a file/module that can be resolved.
    'import-x/no-unresolved': 'error',
    // Verifies that named imports exists as exports in the imported file.
    'import-x/named': 'error',
    // Ensures a default export is present when importing a default.
    'import-x/default': 'error',
    // If you do import * as foo from 'bar'
    // and then do foo.bar(), but bar wasn't exported, then this rule will catch it.
    'import-x/namespace': 'error',
    // with rare exceptions, like importing global environment linked dependencies like '@aws-sdk/x'
    // this is most likely catches a mistake
    'import-x/no-extraneous-dependencies': 'error',
    // It is very rare that you actually need a cyclical dependencies. Most likely this was a mistake
    'import-x/no-cycle': 'error',
    // Why would you ever import self?
    'import-x/no-self-import': 'error',
    // If you have written an import like '../../folder/file.js' when you could have done './file.js'
    // then it was most likely a copy-paste issue
    'import-x/no-useless-path-segments': 'error',

    // -- Cleanliness ---
    // Who likes unused variables lying around? It adds noise
    'no-unused-vars': 'error',
    // I've missed a few console.log()s before committing code
    'no-console': ['error', {
      allow: ['warn', 'error']
    }],
    // Imports are hoisted (which means the imported modules will be evaluated before any of the statements interspersed between them)
    // This is not a problem if you are aware of it. But to prevent potential issues + for keeping clarity / cleanliness I
    // prefer imports at the top of the file.
    'import-x/first': 'error',
  }
};
