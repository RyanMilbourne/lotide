const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}` + "\n");

  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}` + "\n");
  }
};

const tail = function(words) {
  let output = [];

  for (let b = 1; b < words.length; b++) {
    output.push(words[b]);
  }
  // This console.log prints out the tail values (everything but the head value)
  console.log(`The tail values are ${output}`);
  return output;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
const testPass = tail([1, 2, 3, 4, 5]);
assertEqual(testPass[0], 2);
const testFail = tail(["Ok", "This", "will", "Fail"]);
assertEqual(testFail[1], "Supposed to fail");