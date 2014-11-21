'use strict';

/**
 * Accepts an array of objects with `message` properties, and returns an array
 * of messages that are under 50 chars long
 *
 * @param {Array} messageObjArray   The array of objects with `message` properties
 * @returns {Array}                 An array of message strings under 50 chars
 */

module.exports = function(messageObjArray) {
  return messageObjArray.map(function(messageObj) {
    return messageObj.message;
  })
  .filter(function(message) {
    return message.length < 50;
  });
};