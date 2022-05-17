function sorting(inputArray) {
    let lowestNum = inputArray.sort((a, b) => a - b);
    let biggestNum = inputArray.sort((a, b) => b - a);
    let nums = [];
    
    while (inputArray.length > 0){
        nums.push(biggestNum.shift());
        nums.push(lowestNum.pop());
      
    }
    console.log(nums.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);