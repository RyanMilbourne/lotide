const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];
    if (results[character]) {
      results[character].push(i);
    } else {
      results[character] = [i];
    }
  }
  return results;
};

// letterPositions("abcdefgabcdefg"); // testing if letterPositions works

const eqArrays = function(arr1, arr2) {
  console.log("The values being compared are:", (arr1), "&", (arr2));

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArrayEq = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log("✅ True ✅" + ('\n'));
  } else {
    console.log("❌ False ❌" + ('\n'));
  }
  return result;
};

assertArrayEq(letterPositions("hello").e, [1]); // will return 'true'
assertArrayEq(letterPositions("ryan").r, [1]); // will return 'false'
assertArrayEq(letterPositions("ryan").r, [0]); // will return 'true''