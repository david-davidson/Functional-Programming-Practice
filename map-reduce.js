'use strict';

/**
 * `map` implemented with `reduce`
 *
 * Accepts an array and a function, and reduces the array into a new array,
 * each member of which has been run through the function
 *
 * @param {Array} arr         The array to map over
 * @param {Function} func     The function to apply to each array member
 * @returns {Array}           The new array of modified members
 */

module.exports = function(arr, func) {
  return arr.reduce(function(accumulator, current) {
    return accumulator.concat(func(current));
  }, []);
};