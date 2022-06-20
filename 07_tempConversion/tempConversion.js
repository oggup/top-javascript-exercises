const ftoc = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  celsius = Number(celsius.toFixed(1));

  return celsius;
};

const ctof = function (celsius) {
  let farenheit = celsius * (9 / 5) + 32;
  farenheit = Number(farenheit.toFixed(1));
  return farenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
