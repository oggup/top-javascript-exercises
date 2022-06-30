const findTheOldest = function (array) {
 return array.reduce((oldest, currentPerson) => {
    if(!oldest.yearOfDeath || !currentPerson.yearOfDeath){
        oldest.yearOfDeath= new Date().getFullYear();
        currentPerson.yearOfDeath= new Date().getFullYear()
    }
    
    let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    let currentPersonAge =
      currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    return oldestAge < currentPersonAge ? currentPerson : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
