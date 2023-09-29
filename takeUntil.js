const takeUntil = function(array, callback) {

  /* my old method
   // let end = array.length - 1;
   // for (const x of array) {
   //   if (callback(x)) {
   //     end = array.indexOf(x);
   //   }
   // }
   // return array.slice(0, end);
   // };
   */

  // refactored with help from mentor
  const finalResult = [];

  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      finalResult.push(array[i]);
    } else {
      return finalResult;
    }
  }
}

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