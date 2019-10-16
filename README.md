# Emoji country flags to country code
Convert emoji country flags to country code ISO 3166.

### Install
`npm i emoji-flags-to-country`

### Example
```js
const { flagToCountry } = require('emoji-flags-to-country')

function main() {
  const result1 = flagToCountry('🇮🇹')
  const result2 = flagToCountry('🇺🇸')
  const result3 = flagToCountry('🇪🇸')
  console.log(result1) // IT
  console.log(result2) // US
  console.log(result3) // ES
}
```

### Run tests
- `npm test`

### Run lint
- `npm run lint`
