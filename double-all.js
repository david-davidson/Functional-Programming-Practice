'use strict';

/**
 * 101-level use case for `map`: doubles all members of array w/o for-loops
 *
 * @param {Array} numsArray   The array whose members we'll double
 * @returns {Array}           The array with doubled members
 */

module.exports = function(numsArray) {
  return numsArray.map(function(num) {
    return num * 2;
  });
};