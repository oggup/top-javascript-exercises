const reverseString = function (string) {
  //turn it into an array, reverse the array, join it all into a string
  return string.split("").reverse().join("")


  // create empty string> for loop starting at last letter of string> goes down till 0> new string variable is last letter plus next letter going down
//   let newString = "";
//   for (i = string.length - 1; i >= 0; i--) {
//     newString += string[i];
//   }
//   return newString;
};

// Do not edit below this line
module.exports = reverseString;
