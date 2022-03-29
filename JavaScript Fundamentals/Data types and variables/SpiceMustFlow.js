function spice(yield) {
    //starting yield = spice on first day
    //for each day yield-=10
    //profitable when yield per day is >=100
    // -26 spices per day +26 at the end of contract
    //break if yield < 100

    dayCounter = 0;
    totalYield = 0;
    while (yield >= 100) {
        dayCounter++;
        totalYield += (yield - 26);
        yield -= 10;
    }
    totalYield -= 26;
    console.log(dayCounter);
    console.log(totalYield);


}
spice(149);