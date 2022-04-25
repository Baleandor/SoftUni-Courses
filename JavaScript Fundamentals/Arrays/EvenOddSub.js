function solve(arr) {
    sumEven = 0;
    sumOdd = 0;
    
    for(let i = 0; i <arr.length; i++){
        arr[i]=Number(arr[i]);
    }
    for (let num of arr) {
        if (num % 2 == 0) {
            sumEven += num;
        }else {
            sumOdd += num;
        }
    }
    sumFinal = sumEven - sumOdd;
    console.log(sumFinal);
}
solve([2,4,6,8,10]);