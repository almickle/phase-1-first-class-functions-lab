const returnFirstTwoDrivers = scuberArray => scuberArray.slice(0, 2)

const returnLastTwoDrivers = scuberArray => scuberArray.slice(2, 4)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    return function fareMultiplier (fare) {
        return fare * x
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fareQuintupler = createFareMultiplier(5)

function selectDifferentDrivers (scuberArray, drivers) {
    return drivers(scuberArray)
}