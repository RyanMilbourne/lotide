const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log((`✅✅✅ Assertion Passed: ${actual} === ${expected}`) + "\n");
  } else {
    console.log((`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`) + "\n");
  }
};

const eqArrays = function(val1, val2) {
  let result = '';
  if (val1.length !== val2.length) {
    result = false;
  }

  for (let i = 0; i < val1.length; i++) {
    if (val1[i] === val2[i]) {
      result = true;
    } else {
      result = false;
    }
  }
  // console.log(val1);
  console.log("The values being compared are:", (val1), "&", (val2));
  return result;
};

assertEqual(eqArrays([1, 2, 3, 4, '5'], [1, 2, 3, 4, 5]), true); // => false)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["Banana", 1, 2, 3], ["Banana", 1, 2, 3]), true); // => should PASS