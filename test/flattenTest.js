const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

console.log(flatten([[1], 2, 3, [4, 5]])); // => [2, 3] should be printed
const testArr = ["hello", "world", "lighthouse", [1, 2, 3]];
assertArraysEqual(flatten(testArr), ["hello", "world", "lighthouse", 1, 2, 3]);
assertArraysEqual(flatten(testArr), ["This", "Should", ["FAIL"], [1337]]);