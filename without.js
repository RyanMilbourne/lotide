const without = function(source, itemsToRemove) {
  const newValue = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newValue.push(source[i]);
    }
  }
  return newValue;
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


console.log(without([1, 2, 3], [1])); // => [2, 3] should be printed
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);