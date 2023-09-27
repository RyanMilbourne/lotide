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

const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log((`✅✅✅ Assertion Passed: ${actual} === ${expected}`) + "\n");
  } else {
    console.log((`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`) + "\n");
  }
};


const isArray = (arr) => {
  if (Array.isArray(arr)) {
    return true;
  }
};

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  for (let key of object1Keys) {
    if (object2.hasOwnProperty(key) !== true) {
      return false; // Key in object1 is missing in object2
    }
  }

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    if (isArray(object1Keys[key])) {
      if (!eqArrays(object1Keys[key], object2Keys[key])) {
        return false;
      }
    }
  }
  for (let key in object1) {
    if (object2.hasOwnProperty(key) && object1[key].length !== object2[key].length) {
      return false;
    }
    if (eqArrays(object1[key], object2[key]) !== true) {
      return false;
    }
  }
  return true;
};


//test runs

const multiColorShirtObject = {
  colors: ["red", "blue"],
  size: "medium"
};

const anotherMultiColorShirtObject = {
  colors: ["red", "blue"],
  size: "medium"
};

const myShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  fit: "regular"
};

const mySweaterObject = {
  size: "medium",
  colors: ["der", "eulb"],
  fit: "raluger"
};

assertEquals(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

assertEquals(eqObjects(multiColorShirtObject, myShirtObject), true); // => false

assertEquals(eqObjects(myShirtObject, mySweaterObject), true); // => false

//mentor note
// console.log(typeof multiColorShirtObject === "object" && !Array.isArray(multiColorShirtObject));