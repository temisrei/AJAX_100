const sum = (a, b) => {
  if (b) {
    return a + b;
  } else {
    return a;
  }
};

module.exports = {
  sum: sum,
}