const assert = require('assert')
const { flagToCountry } = require('../index')

describe('Tests for emoji flags to country code', () => {
  it('should return undefined for empty inputs', () => {
    assert.strictEqual(flagToCountry(''), undefined)
    assert.strictEqual(flagToCountry(null), undefined)
    assert.strictEqual(flagToCountry(undefined), undefined)
  })
  it('should return undefined for any character that is not a flag emoji', () => {
    assert.strictEqual(flagToCountry('hello world'), undefined)
    assert.strictEqual(flagToCountry('US'), undefined)
    assert.strictEqual(flagToCountry('😀'), undefined)
  })
  it('should return the correct country code for a given emoji flag', () => {
    assert.strictEqual(flagToCountry('🇮🇹'), 'IT')
    assert.strictEqual(flagToCountry('🇺🇸'), 'US')
    assert.strictEqual(flagToCountry('🇪🇸'), 'ES')
  })
})
