const eqArrays = require('./eqArrays')

const assertArrayEq = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log("✅ True" + '\n')
  } else {
    console.log("❌ False" + '\n')
  }
  return result
};

module.exports = assertArrayEq;
