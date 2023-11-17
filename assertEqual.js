const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected} \n`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected} \n`);
  }
};

module.exports = assertEquals;