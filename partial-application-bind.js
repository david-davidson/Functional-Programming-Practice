'use strict';

/**
 * Accepts a string, and uses `Array.prototype.bind` to partially apply
 * that string to `console.log`
 *
 * @param {String} namespace    The string to partially apply
 * @returns {Function}          `console.log`, with the prefix already applied
 */

module.exports = function(namespace) {
  return console.log.bind(null, namespace);
};