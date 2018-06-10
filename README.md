# eslint-config-eden [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-image]

[npm-image]: https://img.shields.io/npm/v/eslint-config-eden.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-eden
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-eden.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/eslint-config-eden

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [EdenJS](https://github.com/eden-js/eden)


## Install

Using NPM:

```bash
npm install --save-dev @eden-js/eslint-config-eden
```

Using Yarn:

```bash
yarn add --dev @eden-js/eslint-config-eden
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

To use the EdenJS shareable config, first run this:

Using NPM:

```bash
npm install --save-dev eslint @eden-js/eslint-config-eden
```

Using Yarn:

```bash
yarn add --dev eslint @eden-js/eslint-config-eden
```

Then, add this to your .eslintrc file:

```json
{
  "extends": "@eden-js/eden"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.
