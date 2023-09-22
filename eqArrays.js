const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log((`✅✅✅ Assertion Passed: ${actual} === ${expected}`) + "\n");
  } else {
    console.log((`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`) + "\n");
  }
};

const eqArrays = function(arr1, arr2) {
  console.log("The values being compared are:", (arr1), "&", (arr2));

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

assertEqual(eqArrays([1, 2, 3, 4, '5'], [1, 2, 3, 4, 5]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["Banana", 1, 2, 3], ["Banana", 1, 2, 3]), true);
assertEqual(eqArrays(["Kanana", 1, 2, 3], ["Banana", 1, 2, 3]), false);
assertEqual(eqArrays(["Dog", "Cat", "Bird"], ["Cat", "Rat", "Soup"]), false)
assertEqual(eqArrays(["frog"], ["stick"]), false);