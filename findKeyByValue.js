const assertEquals = require('./assertEqual');

const findKeyByValue = function(obj, val) {
  for (const genre in obj) {
    if (obj[genre] === val) {
      console.log(`"${val}" falls under the ${genre} genre.`);
      return genre;
    }
  }
  return;
};

// test runs

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEquals(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // pass
assertEquals(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // pass
assertEquals(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama"); // fail

module.exports = findKeyByValue;