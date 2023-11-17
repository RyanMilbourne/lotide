const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];
    if (results[character]) {
      results[character].push(i);
    } else {
      results[character] = [i];
    }
  }
  return results;
};

// test runs
/*
const assertArraysEqual = require('./assertArraysEqual');

assertArraysEqual(letterPositions("hello").e, [1]); // will return 'true'
assertArraysEqual(letterPositions("ryan").r, [1]); // will return 'false'
assertArraysEqual(letterPositions("ryan").r, [0]); // will return 'true'
*/

module.exports = letterPositions;