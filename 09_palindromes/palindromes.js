const palindromes = function (string) {
//   let newString = string.split().reverse().join();
//   if (string.toLowerCase() === newString.toLowerCase()) return true;

let reg= /[\W_]/g
let smallString = string.toLowerCase().replace(reg, '');
let reversed = smallString.split('').reverse().join("");
if(reversed === smallString)return true;
return false;
};

// Do not edit below this line
module.exports = palindromes;
