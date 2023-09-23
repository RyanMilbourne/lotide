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

const middle = function(array) {
  let output = [];
  const middleVal = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return output;
  }

  if (array.length % 2 !== 0) {
    output = [array[middleVal]];
  } else {
    output = [array[middleVal - 1], array[middleVal]];
  }

  return output;
};

const testArr1 = [0, 50, 100];
assertArraysEqual(middle(testArr1), ["50"]); // Will result in False

const testArr2 = ["hello", "world", "lighthouse"];
assertArraysEqual(middle(testArr2), ["world"]); // Will result in True
