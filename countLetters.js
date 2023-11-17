const countLetters = function(str) {
  let characterCount = {};

  for (const character of str) {
    if (characterCount[character]) {
      characterCount[character] += 1;
    } else {
      characterCount[character] = 1;
    }
  }
  return characterCount;
};

module.exports = countLetters;