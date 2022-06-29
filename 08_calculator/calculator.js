const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, currentNumber) => {
    return total + currentNumber;
  }, 0);
};

function multiply(array) {
  return array.reduce((total, currentNumber) => {
    return total * currentNumber;
  });
}

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  }
  let product = 1;
  for (let i = a; i > 0; i--) product = product * i;
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
