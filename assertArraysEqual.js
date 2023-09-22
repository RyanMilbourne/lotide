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

const assertArrayEq = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log("True")
  } else {
    console.log("False")
  }
  return result
};

assertArrayEq([1, 2, 3], [4, 5, 6])