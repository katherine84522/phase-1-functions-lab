// Code your solution in this file!
const distanceFromHqInBlocks = (location) => {
    if (location > 42) {
        return location - 42
    }
    else return 42 - location;
}

const distanceFromHqInFeet = (location) => {
    return distanceFromHqInBlocks(location) * 264
}

const distanceTravelledInFeet = (start, destination) => {
    if (start > destination) {
        return (start - destination) * 264
    }
    else return (destination - start) * 264
}

const calculatesFarePrice = (start, destination) => {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }
    if (distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    }
    if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    }
    else return 'cannot travel that far';
}