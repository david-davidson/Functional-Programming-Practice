'use strict';

/**
 * Takes a function and a counter as arguments; executes the function once per count
 *
 * @param {Function} func   The function to execute
 * @param {Int} counter     The number of times to execute it
 */

var repeat = function(func, counter) {
  if (counter < 1) {
    return;
  }
  return repeat(func, --counter);
};

module.exports = repeat;