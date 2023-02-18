# jest-config-ts

A Jest configuration to add support for TypeScript projects.

# THIS IS DEPRECATED

`@craigmiller160/jest-config` v2.0.0+ has been upgraded to use `@swc/jest` as its transpiler, giving it seamless support for both JS and TS syntax. Therefore this library is no longer needed.

## How to Use

First, install this library with `yarn install --dev @craigmiller160/jest-config-ts`. If you need to merge this with other configs, also install the `config-mege` library with `yarn install --dev @craigmiller160/config-merge`.

Then, create a `jest.config.js` file in the root of your project.

If only using this config (unlikely), use it with:

```javascript
module.exports = require('@craigmiller160/jest-config-ts');
```

If combining it with other configs, whether from libraries or locally, use it with:

```javascript
const jestConfig = require('@craigmiller160/jest-config-ts');
const configMerge = require('@craigmiller160/config-merge');

module.exports = configMerge(jestConfig, moreConfig1, moreConfig2);
```

## How to Run

Simply run the `jest` command to execute the tests using this configuration.
