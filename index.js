'use strict'

module.exports = (str, insert, index, numCharsToRemove = 0) => {
  numCharsToRemove = numCharsToRemove === -1 ? insert.length : numCharsToRemove
  return str.substr(0, index) + insert + str.substr(index + numCharsToRemove)
}
