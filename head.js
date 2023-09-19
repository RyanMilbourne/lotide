const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}` + "\n");

  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}` + "\n");
  }
};

const head = function(array) {
  if (array.length === 0) {
    console.log(`The first element of the array is undefined`);
    return undefined
  } else if (array.length !== 0) {
    console.log(`The first element of the array is ${array[0]}`)
    return array[0];
  }
}


assertEqual((head([5, 6, 7]), 5), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual((head([25, 50, 75], "testing")), 25.5);