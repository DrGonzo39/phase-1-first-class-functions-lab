const returnFirstTwoDrivers = (drivers) => { 
    return drivers.slice(0,2);
};
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
       return fare * multiplier 
    }
};
const fareDoubler = (fare) => {
    return createFareMultiplier = fare * 2; 
}
const fareTripler = (fare) => {
    return createFareMultiplier = fare * 3;
}
const selectDifferentDrivers = (arrayOfDrivers, funk) => {
    return funk(arrayOfDrivers)
}