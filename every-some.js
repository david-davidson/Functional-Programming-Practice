'use strict';

/**
 * Accepts an array of user ID objects (e.g., [ { id: 1 }, { id: 2 } ]),
 * and returns a function that accepts an identically formatted array of
 * users and returns true if all those users exist in the original array
 *
 * @param {Array} whitelist   The valid users to check against
 * @returns {Function}        The function that checks users against the list
 */

module.exports = function(whitelist) {
  
  var validUsers = whitelist.map(function(userObj) {
    return userObj.id;
  });

  /**
   * @param {Array} users     The users to check against the list
   * @returns {Bool}          The pass/fail status
   */
  return function(users) {
    
    return users.map(function(userObj) {
      return userObj.id;
    })
    .every(function(userID) {
      return validUsers.some(function(validID) {
        return userID === validID;
      });
    });
  };

};