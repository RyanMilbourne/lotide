const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

countLetters("abbccc");

const test = countLetters("abbccc");

const testTwo = countLetters("effggg");

assertEqual(test["a"], 1); // should pass
assertEqual(test["b"], 2); // should pass
assertEqual(test["c"], 3); // should pass

assertEqual(testTwo["c"], undefined); // should pass
assertEqual(testTwo["e"], undefined); // should fail