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

module.exports = countOnly;