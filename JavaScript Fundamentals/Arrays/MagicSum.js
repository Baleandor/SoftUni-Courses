function solve(arr,n){
    for (i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    for (i=0; i< arr.length; i++){
        if(arr[i] + arr[i+1] == n){
            console.log(arr[i, arr[i+1]]);
        }
    }
}
solve([1, 7, 6, 2, 19, 23],8);