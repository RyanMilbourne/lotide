const without = function(source, itemsToRemove) {
  const newValue = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newValue.push(source[i]);
    }
  }
  return newValue;
};

module.exports = without;