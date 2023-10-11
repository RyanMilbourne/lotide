const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays')

assertEqual(eqArrays([1, 2, 3, 4, '5'], [1, 2, 3, 4, 5]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["Banana", 1, 2, 3], ["Banana", 1, 2, 3]), true);
assertEqual(eqArrays(["Kanana", 1, 2, 3], ["Banana", 1, 2, 3]), false);
assertEqual(eqArrays(["Dog", "Cat", "Bird"], ["Cat", "Rat", "Soup"]), false)
assertEqual(eqArrays(["frog"], ["stick"]), false);