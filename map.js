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

const assertArraysEq = function(arr1, arr2) {

  if (arr1 !== arr2) {
    return false;
  }
  return true;
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};


const results1 = map(words, word => word[0]);
// console.log(results1);

// test cases

console.log(eqArrays(results1, ['wrong'])); // return false

console.log(assertArraysEq(eqArrays(results1, ['g', 'c', 't', 'm', 't']), true)); // return true