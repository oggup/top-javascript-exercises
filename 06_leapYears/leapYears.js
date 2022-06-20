const leapYears = function (year) {
  //using if statement
  //   if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
  //     return true;
  //   }
  //   return false;
  //using ternery conditional
  return (result =
    year % 4 === 0 && (year % 100 != 0 || year % 400 === 0) ? true : false);
};

// Do not edit below this line
module.exports = leapYears;
