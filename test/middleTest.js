const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js')

const testArr1 = [0, 50, 100];
assertArraysEqual(middle(testArr1), ["50"]); // Will result in False

const testArr2 = ["hello", "world", "lighthouse"];
assertArraysEqual(middle(testArr2), ["world"]); // Will result in True
