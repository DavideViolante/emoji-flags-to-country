# Emoji country flags to country code [![](https://github.com/davideviolante/emoji-flags-to-country/workflows/Node.js%20CI/badge.svg)](https://github.com/DavideViolante/emoji-flags-to-country/actions?query=workflow%3A"Node.js+CI") [![Donate](https://img.shields.io/badge/paypal-donate-179BD7.svg)](https://www.paypal.me/dviolante)
Convert emoji country flags to country code ISO 3166.

### Install
`npm i emoji-flags-to-country`

### Example
```js
const { flagToCountry, getFlagsInText } = require('emoji-flags-to-country')

const result1 = flagToCountry('🇮🇹')
const result2 = flagToCountry('🇺🇸')
const result3 = flagToCountry('🇪🇸')
console.log(result1) // IT
console.log(result2) // US
console.log(result3) // ES

const result4 = getFlagsInText('This text has 🇺🇸 emoji flags 🇮🇹')
console.log(result4) // ['🇺🇸', '🇮🇹']
```

### Run tests
- `npm test`

### Run lint
- `npm run lint`

### Author
- [Davide Violante](https://github.com/DavideViolante/)
