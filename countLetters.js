const assertEquals = require('./assertEqual');

const countLetters = function(str) {
  let characterCount = {};

  for (const character of str) {
    if (characterCount[character]) {
      characterCount[character] += 1;
    } else {
      characterCount[character] = 1;
    }
  }
  return characterCount;
};

// test runs

const test = countLetters("abbccc");

const testTwo = countLetters("effggg");

assertEquals(test["a"], 1); // should pass
assertEquals(test["b"], 2); // should pass
assertEquals(test["c"], 3); // should pass

assertEquals(testTwo["c"], undefined); // should pass
assertEquals(testTwo["e"], undefined); // should fail

module.exports = countLetters;