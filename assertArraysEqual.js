const eqArrays = function(val1, val2) {
  let result = '';
  let printOut = ''
  if (val1.length !== val2.length) {
    result = false;
  };

  for (let i = 0; i < val1.length; i++) {
    if (val1[i] === val2[i]) {
      result = true;
    } else {
      result = false;
    }
  };

  if (result === true) {
    printOut = (("The result of the comparison is true ✅") + "\n");
  } else {
    printOut = ("The result of the comparison is false ⛔" + "\n");
  };

  console.log("The values being compared are:", (val1), "&", (val2));
  console.log(printOut);
};

eqArrays([1, 2, 3, 4, '5'], [1, 2, 3, 4, 5])// => false)
eqArrays([1, 2, 3], [3, 2, 1]) // => false)
eqArrays([1, 2, 3], [1, 2, 3]) // => should PASS
eqArrays(["Banana", 1, 2, 3], ["Banana", 1, 2, 3]); // => should PASS