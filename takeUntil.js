const takeUntil = function(array, callback) {

  const finalResult = [];

  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      finalResult.push(array[i]);
    } else {
      return finalResult;
    }
  }
};

module.exports = takeUntil;