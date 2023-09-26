const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log((`✅✅✅ Assertion Passed: ${actual} === ${expected}`) + "\n");
  } else {
    console.log((`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`) + "\n");
  }
};

const findKeyByValue = function(obj, val) {

  for (const genre in obj) {
    if (obj[genre] === val) {
      console.log(`"${val}" falls under the ${genre} genre.`);
      return genre;
    }
  }

  return;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama"); // will fail