const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// for testing:

const myObjectOne = {
  size: "Large",
  color: ["black", "grey"],
};

const myObjectTwo = {
  color: ["yellow", "orange"],
  size: "Large"
};

const myObjectThree = {
  size: "Large",
  color: ["yellow", "orange"]
};

assertObjectsEqual(myObjectOne, myObjectTwo); // false

assertObjectsEqual({ a: '1', b: '2' }, { b: '2', a: '1' }); // true

assertObjectsEqual(myObjectTwo, myObjectThree); // true

module.exports = assertObjectsEqual;