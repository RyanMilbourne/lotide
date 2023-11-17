const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  for (let key of object1Keys) {
    if (object2.hasOwnProperty(key) !== true) {
      return false;
    }
  }

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    if (Array.isArray(object1Keys[key])) {
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

module.exports = eqObjects;