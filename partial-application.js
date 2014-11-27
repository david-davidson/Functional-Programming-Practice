'use strict';

/**
 * Accepts a string, and returns a function that partially applies that string
 * to `console.log` as a prefix
 *
 * @param {String} arguments    The string to partially apply
 * @returns {Function}          `console.log`, with the prefix already applied
 */

var slice = Array.prototype.slice;

module.exports = function() {
  var firstArg = slice.call(arguments);

  return function() {
    var secondArgs = slice.call(arguments);
    return console.log.apply(null, firstArg.concat(secondArgs));
  };

};