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

module.exports = middle;