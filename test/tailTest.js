const assertEqual = require('../assertEqual');
const tail = require('../tail')

// declaring these constants for simplicity while running assertEqual
const result = tail(["Hello", "Lighthouse", "Labs"]);
const testPass = tail([1, 2, 3, 4, 5]);
const testFail = tail(["apple"]);

// test code
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(testPass[0], 2);

assertEqual(testFail, "Supposed to fail");
