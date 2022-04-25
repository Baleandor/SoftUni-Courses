function arrayRotation(arr, num) {
    for(let i = 0; i < num; i++) {
        let currentNum = Number(arr.shift());
        arr.push(currentNum);
    }
    console.log(arr.join(` `))
}