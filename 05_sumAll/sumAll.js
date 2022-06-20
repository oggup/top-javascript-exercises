const sumAll = function (min, max) {
  let sum = 0;
  if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0) {
    return "ERROR";
  }
  if (min > max) {
    const newMax = min;
    min = max;
    max = newMax;
  }
  for (i = min; i <= max; i++) {
    sum += i;
  }
  console.log(min, max);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
