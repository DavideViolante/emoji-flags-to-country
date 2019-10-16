const flagToCountryMap = require('./map')

/**
 * Emoji flag to country code converter
 * @param {String} str Emoji flag to convert
 * @returns {String} Country code ISO 3166
 */
function flagToCountry (str) {
  return flagToCountryMap[str];
}

exports.flagToCountry = flagToCountry
