function negativePositiveNumbers(arr){
    let newArr = [];
    for (let element of arr){
        element = Number(element);
        if (element < 0){
            newArr.unshift(element);
        }else {
            newArr.push(element);
        }
    }

for (let element of newArr){
    console.log(element);
}
}