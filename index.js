
// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,param){
   return drivers.filter(e=>e.toLowerCase()===param.toLowerCase())
}
function fuzzyMatch(drivers,param){
    return drivers.filter(e=>e.startsWith(param));
}
function matchName(drivers,param){
return drivers.filter(e=>e.name===param);
}

console.log(findMatching(drivers,"Bobby"));
console.log(findMatching(drivers,"S"));
// console.log(findMatching(drivers,"Bobby"));