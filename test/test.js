const assert = require('assert')
const { flagToCountry, getFlagsInText } = require('../index')

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
    assert.strictEqual(flagToCountry('🇪🇺'), 'EU')
  })
  it('should return an empty array for an invalid text', () => {
    assert.deepEqual(getFlagsInText(''), [])
    assert.deepEqual(getFlagsInText(null), [])
    assert.deepEqual(getFlagsInText(undefined), [])
  })
  it('should return an empty array for a text with no emoji flags', () => {
    assert.deepEqual(getFlagsInText('This text has no emoji flags 😀'), [])
  })
  it('should return an array of emoji flags for a text with emoji flags', () => {
    assert.deepEqual(getFlagsInText('Italians do it better 🇮🇹'), ['🇮🇹'])
    assert.deepEqual(getFlagsInText('🇮🇹 some flag 🇺🇸 here and there🇪🇸 and also 🇪🇺'), ['🇮🇹', '🇺🇸', '🇪🇸', '🇪🇺'])
  })
})
