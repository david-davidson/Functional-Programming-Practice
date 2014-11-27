'use strict';

/**
 * Accepts an unknown number of objects as arguments, and returns the number
 * of them that have the own property `quack`
 *
 * Conditions:
 *   - No loops or Array.forEach
 *   - No counters or accumulators
 *   - No helper functions
 *
 * @param {Object} arguments    All arguments passed to the function
 * @returns {Number}            How many have the own property `quack`
 */

module.exports = function() {
  return Array.prototype.slice.call(arguments) // Turn `arguments` into an array
  .filter(function(current) {
    // Check for own property even if current's prototype is null
    return Object.prototype.hasOwnProperty.call(current, 'quack');
  }).length;
};