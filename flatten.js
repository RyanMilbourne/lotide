const flatten = function(arrayOfArrays) {
  let flattenedArray = [];

  for (const element of arrayOfArrays) {
    if (Array.isArray(element)) {
      for (const nestedArray of element) {
        flattenedArray.push(nestedArray);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
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

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log("True ✅" + "\n");
  } else {
    console.log("False ❌" + "\n");
  }
  return result;
};


console.log(flatten([[1], 2, 3, [4, 5]])); // => [2, 3] should be printed
const testArr = ["hello", "world", "lighthouse", [1, 2, 3]];
assertArraysEqual(flatten(testArr), ["hello", "world", "lighthouse", 1, 2, 3]);
assertArraysEqual(flatten(testArr), ["This", "Should", ["FAIL"], [1337]]);