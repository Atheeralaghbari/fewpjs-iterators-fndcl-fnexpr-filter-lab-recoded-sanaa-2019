
// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,param){
   return drivers.filter(e=>e.toLowerCase()===param.toLowerCase())
}
console.log(findMatching(drivers,"Bobby"));

function fuzzyMatch(drivers,param){
    return drivers.filter(e=>e.startsWith(param));
}
console.log(findMatching(drivers,"S"));
function matchName(drivers,param){
return drivers.filter(e=>e.name===param);
}



// console.log(findMatching(drivers,"Bobby"));