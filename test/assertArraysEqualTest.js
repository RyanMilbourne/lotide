const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [4, 5, 6]);
assertArraysEqual([4, 5, 6], [4, 5, 6]);
assertArraysEqual(["banana", "gorilla"], ["monkey", "banana"]);