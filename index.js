const hq = 42;

function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - hq;
    }
    else {
        return hq - blocks;
    };
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    }
    else {
        return (destination - start) * 264;
    };
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return (distanceTravelledInFeet(start, destination) * 0);
    }
    if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return ((distanceTravelledInFeet(start, destination) - 400) * 0.02)
    }
    if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500)
        return (25)
    else {
        return 'cannot travel that far';
    }
}
