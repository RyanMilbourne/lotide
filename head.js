const head = function(array) {
  if (array.length === 0) {
    console.log(`The first element of the array is undefined`);
    return undefined
  } else if (array.length !== 0) {
    console.log(`The first element of the array is ${array[0]}`)
    return array[0];
  }
}

module.exports = head;

