function solve(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    let arrNew = [];
    let arrOldSum = 0;
    let arrNewSum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arrNew.push(arr[i] + i);
        } else {
            arrNew.push(arr[i] - i);
        }
    }
    for(let num of arr){
        arrOldSum+=num;
    }
    for(let num of arrNew){
        arrNewSum+=num;
    }
    console.log(arrNew);
    console.log(arrOldSum);
    console.log(arrNewSum);

}
solve([5,15,23,56,35]);