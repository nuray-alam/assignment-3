// https://github.com/nuray-alam/assignment-3

// First function to convert the from kilometer to meter unit

function kilometerToMeter(numberInKilometer) {
    // special case one
    if (typeof numberInKilometer != "number") {
        console.log("Wrong type of input. Number type input expected for distance. Returning 0 as result");
        return 0;
    }
    // special case two
    else if (numberInKilometer < 0) {
        console.log("Distance can not be negative.","Returning 0 kilometer as result");
        return 0;
    }
    const numberInMeter = numberInKilometer * 1000;
    return numberInMeter;
}

// Second function to find the total budget

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop) {
    // special case one
    if (typeof numberOfWatch != "number" || typeof numberOfMobile != "number" || typeof numberOfLaptop != "number") {
        console.log("Number type input expected. Returning 0 as result");
        return 0;
    }
    // special case two
    else if (numberOfWatch < 0 || numberOfMobile < 0 || numberOfLaptop < 0) {
        console.log("Expected Positive input. Returning 0 as result");
        return 0;
    }
    let totalBudget = numberOfWatch * 50 + numberOfMobile * 100 + numberOfLaptop * 500;
    return totalBudget;
}

// Third function to find the total hotel cost

function hotelCost(numberOfLivingDays) {
    // special case one
    if (typeof numberOfLivingDays != "number") {
        console.log("Number type input expected. Returning 0 as result");
        return 0;
    }
    //special case two
    else if (numberOfLivingDays < 0) {
        console.log("Wrong input. Please enter positive number. Returning 0 as result");
        return 0;
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
