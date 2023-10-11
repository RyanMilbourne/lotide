const tail = function(words) {
  let output = [];

  if (words.length > 1) {
    for (let i = 1; i < words.length; i++) {
      output.push(words[i]);
    }
  } else if (words.length <= 1) {
    output = '[]';
  }
  // This console.log prints out the tail values (everything but the head value)
  console.log(`The tail values are [${output}]`);
  return output;
};

module.exports = tail;