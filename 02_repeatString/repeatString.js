const repeatString = function (word, timesRepeated) {
  let string = "";
  if (timesRepeated <0){
      return "ERROR"
  }
  for (i = 0; i < timesRepeated; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
