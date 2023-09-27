const eqArrays = function(arr1, arr2) {
  // console.log("The values being compared are:", (arr1), "&", (arr2));
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

// const isArray = (arr) => {
//   if (Array.isArray(arr)) {
//     return true;
//   }
// };

// const eqObjects = function(object1, object2) {
//   const object1Keys = Object.keys(object1);
//   const object2Keys = Object.keys(object2);

//   for (let key of object1Keys) {
//     if (object2.hasOwnProperty(key) !== true) {
//       return false;
//     }
//   }

//   if (object1Keys.length !== object2Keys.length) {
//     return false;
//   }

//   for (let key of object1Keys) {
//     if (Array.isArray(object1Keys[key])) {
//       if (!eqArrays(object1Keys[key], object2Keys[key])) {
//         return false;
//       }
//     }
//   }
//   for (let key in object1) {
//     if (object2.hasOwnProperty(key) && object1[key].length !== object2[key].length) {
//       return false;
//     }
//     if (eqArrays(object1[key], object2[key]) !== true) {
//       return false;
//     }
//   }
//   return true;
// };
// const eqObjects = function(object1, object2) {
//   let keys1 = Object.keys(object1);
//   let keys2 = Object.keys(object2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (let key of keys1) {
//     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑 ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

const myObjectOne = {
  size: "Large",
  color: ["black", "grey"],
};

const myObjectTwo = {
  color: ["yellow", "orange"],
  size: "Large"
};

const myObjectThree = {
  size: "Large",
  color: ["yellow", "orange"]
};

// test 1
assertObjectsEqual(myObjectOne, myObjectTwo) // false

// test 2
assertObjectsEqual({ a: '1', b: '2' }, { a: '1', b: '2' }) // true

// test 3
assertObjectsEqual(myObjectTwo, myObjectThree)