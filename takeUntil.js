const takeUntil = function(array, callback) {

  // array will be a list of numbers / strings (in these examples)
  // a for of loop will loop through the array
  // when the callback function is truthy, collect the index value of looped variable (x) and store as 'end' value for later slice.
  // return the sliced array with starting point 0 and ending point from index value indicated above

  let end = [];
  for (const x of array) {
    if (callback(x)) {
      end = array.indexOf(x);
    }
  }
  return array.slice(0, end);

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// expected results
/*
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/