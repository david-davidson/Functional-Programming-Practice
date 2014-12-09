'use strict';

/**
 * Accepts an object and a method, and--without altering its behavior--tracks 
 * how many times that method is called
 *
 * e.g.,
 *  `var spy = Spy(console, 'error')`
 *  `console.error('Hello, world')`
 *  `console.log(spy.count)` // 1
 *
 * @param {Object} context    The object whose method we're interested in
 * @param {String} method     The method's name
 * @returns {Object}          How many times the method has been called
 */

module.exports = function(context, method) {
  
  var cachedFunc = context[method],
    results = {
      count: 0 // Save in an object so we can pass by reference
    };

  context[method] = function() { // Override original function...
    results.count++;
    return cachedFunc.apply(context, arguments); // But preserve its behavior
  };
  return results; // Expose .count
};