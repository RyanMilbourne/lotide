const findKeyByValue = function(obj, val) {
  for (const genre in obj) {
    if (obj[genre] === val) {
      console.log(`"${val}" falls under the ${genre} genre.`);
      return genre;
    }
  }
  return;
};

module.exports = findKeyByValue;