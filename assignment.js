// https://github.com/nuray-alam/assignment-3

// First function to convert the from kilometer to meter unit

function kilometerToMeter(numberInKilometer) {
    // special case one
    if (typeof numberInKilometer != "number") {
        return "Wrong type of input. Number type input expected for distance.";
    }
    // special case two
    else if (numberInKilometer < 0) {
        return "Distance can not be negative.";
    }
    const numberInMeter = numberInKilometer * 1000;
    return numberInMeter;
}

// Second function to find the total budget

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop) {
    // special case one
    if (typeof numberOfWatch != "number" || typeof numberOfMobile != "number" || typeof numberOfLaptop != "number") {
        return "Number type input expected.";
    }
    // special case two
    else if (numberOfWatch < 0 || numberOfMobile < 0 || numberOfLaptop < 0) {
        return "Expected Positive input.";
    }
    let totalBudget = numberOfWatch * 50 + numberOfMobile * 100 + numberOfLaptop * 500;
    return totalBudget;
}

// Third function to find the total hotel cost

function hotelCost(numberOfLivingDays) {
    // special case one
    if (typeof numberOfLivingDays != "number") {
        return "Number type input expected.";
    }
    //special case two
    else if (numberOfLivingDays < 0) {
        return "Wrong input. Please enter positive number.";
    }
    let totalCost = 0;
    if (numberOfLivingDays <= 10) {
        totalCost = numberOfLivingDays * 100;
    } else if (numberOfLivingDays <= 20) {
        totalCost = 1000 + (numberOfLivingDays - 10) * 80;
    } else {
        totalCost = 1000 + 800 + (numberOfLivingDays - 20) * 50;
    }
    return totalCost;
}

// Fourth function to find the friend with largest name

function megaFriend(arrayOfFriendsName) {
    largestLengthOfName = 0;
    for (var i = 0; i < arrayOfFriendsName.length; i++) {
        if (largestLengthOfName < arrayOfFriendsName[i].length) {
            largestLengthOfName = arrayOfFriendsName[i].length;
        }
    }
    for (var i = 0; i < arrayOfFriendsName.length; i++) {
        if (arrayOfFriendsName[i].length == largestLengthOfName) {
            return arrayOfFriendsName[i];
        }
    }
}