'use strict';

/**
 * Manual implementation of `reduce`: accepts an array, a function,
 * and a starting point or data structure, which acts as the accumulator; 
 * returns the final accumulator after running the whole array through
 * the function, item by item
 *
 * e.g., reduce([1, 2, 3, 4], function(accumulator, current) {
 *  return accumulator + current;
 * }, 0); // => 10
 *
 * @param {Array} arr       The array to be reduced
 * @param {Function} func   The function to handle the reducing
 * @param accumulator       The starting value or data structure
 * @returns                 The final value of the accumulator
 */

var reduce = function(arr, func, accumulator) {

  if (!arr.length) {
    return accumulator;
  }

  /**
   * Calls self with:
   *  1. array minus first item,
   *  2. func, unchanged,
   *  3. the results of calling func with the accumulator
   *    and the first item in the array
   */
  return reduce(arr.slice(1), func, func(accumulator, arr[0]));
};

module.exports = reduce;