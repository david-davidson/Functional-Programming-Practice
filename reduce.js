'use strict';

/**
 * Accepts an array of strings, and uses `reduce` to return a hash that
 * indicates how often each string appears in the array
 *
 * e.g., [ 'dog', 'cat', 'cat' ] -> { cat: 2, dog: 1 }
 *
 * @param {Array} arrayOfStrings    The array of strings to be counted
 * @returns {Object}                The hash of word counts
 */

module.exports = function(arrayOfStrings) {
  return arrayOfStrings.reduce(function(wordHash, current) { // First pass in the function ...
    if (wordHash[current]) {
      wordHash[current] += 1;
    } else {
      wordHash[current] = 1;
    }
    return wordHash; // (always return the accumulator)
  }, {}); // ... And then initialize the accumulator directly
};