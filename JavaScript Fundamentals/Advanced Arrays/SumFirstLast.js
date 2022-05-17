function sumFirstLast(arr){
    let firstSymbol = arr.shift();
    let lastSymbol = arr.pop();
    console.log(Number(firstSymbol)+Number(lastSymbol));

}