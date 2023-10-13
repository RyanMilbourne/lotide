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

module.exports = flatten;