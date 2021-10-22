# Emoji country flags to country code
[![](https://github.com/davideviolante/emoji-flags-to-country/workflows/Node.js%20CI/badge.svg)](https://github.com/DavideViolante/emoji-flags-to-country/actions?query=workflow%3A"Node.js+CI") [![Coverage Status](https://coveralls.io/repos/github/DavideViolante/emoji-flags-to-country/badge.svg?branch=master)](https://coveralls.io/github/DavideViolante/emoji-flags-to-country?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/958c5ceec39aadccb32a/maintainability)](https://codeclimate.com/github/DavideViolante/emoji-flags-to-country/maintainability) ![npm](https://img.shields.io/npm/dm/emoji-flags-to-country) [![Donate](https://img.shields.io/badge/paypal-donate-179BD7.svg)](https://www.paypal.me/dviolante)

[![NPM](https://nodei.co/npm/emoji-flags-to-country.png)](https://nodei.co/npm/emoji-flags-to-country/)

Convert emoji country flags to country code ISO 3166.

### Install
`npm i emoji-flags-to-country`

### Example
```js
const { flagToCountry, getFlagsInText } = require('emoji-flags-to-country');

const result1 = flagToCountry('🇮🇹');
const result2 = flagToCountry('🇺🇸');
const result3 = flagToCountry('🇪🇸');
console.log(result1); // IT
console.log(result2); // US
console.log(result3); // ES

const result4 = getFlagsInText('This text has 🇺🇸 emoji flags 🇮🇹');
console.log(result4); // ['🇺🇸', '🇮🇹'];
```

### Run tests
`npm test`

### Run lint
`npm run lint`

### Author
- [Davide Violante](https://github.com/DavideViolante/)
