const removeFromArray = function (array, ...thingsToRemove) {
    array = array.filter((element)=> !thingsToRemove.includes(element))
    return array
};

//filter through the array returning an array that does not include the elements of thingsToRemove

// Do not edit below this line
module.exports = removeFromArray;
