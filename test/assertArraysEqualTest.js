const assertArrayEq = require('../assertArraysEqual')
const eqArrays = require('../eqArrays')

assertArrayEq([1, 2, 3], [4, 5, 6]);
assertArrayEq([4, 5, 6], [4, 5, 6]);
assertArrayEq(["banana", "gorilla"], ["monkey", "banana"]);