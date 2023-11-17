const countOnly = (items, object) => {
  const result = {};
  items.forEach(item => {
    if (object[item]) {
      if (!result[item]) result[item] = 0;
      result[item] += 1;
    }
  });

  return result;
};

// test run

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const exampleRun = countOnly(firstNames, { Fang: true, Salima: true });

console.log(exampleRun);