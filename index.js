const flagToCountryMap = require('./map')

/**
 * Emoji flag to country code converter
 * @param {String} flag Emoji flag to convert
 * @returns {String} Country code ISO 3166
 */
function flagToCountry(flag) {
  return flagToCountryMap[flag]
}

/**
 * Find emoji flags in text
 * @param {String} text Text that contains emoji flags
 * @returns {String[]} Array of flags 
 */
function getFlagsInText(text) {
  // Regexp from https://medium.com/reactnative/emojis-in-javascript-f693d0eb79fb
  const emojiRegexp = new RegExp('(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2})', 'g')
  return (text || '').match(emojiRegexp) || []
}

module.exports = {
  flagToCountry,
  getFlagsInText
}
