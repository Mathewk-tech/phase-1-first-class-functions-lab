// Code your solution in this file!
const returnFirstTwoDrivers=function (drivers){
    return drivers.slice(0,2);
};
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier=function(multiplier){
    return function(fare){
        return fare *multiplier;
    };
};
const fareDoubler=createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, fn) {
  return fn(drivers);
};
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log("the first two drivers are:", returnFirstTwoDrivers(drivers));
console.log("the last two drivers are:", returnLastTwoDrivers(drivers));
console.log("this calculates for double the fare:", fareDoubler(20));
console.log("this calculates for fare trippled:", fareTripler(30));


