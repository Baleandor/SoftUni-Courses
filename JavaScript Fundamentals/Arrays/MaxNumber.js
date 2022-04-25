function maxNumber(arr) {
    let curNum = 0;
    let result = [];
    let bool = false;
    //console.log(arr.length)
    for (let i = 0; i < arr.length; i++) {
        curNum = Number(arr[i]);
        bool = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (curNum <= Number(arr[j])) {
                bool = true;
            }
        }
        if (bool == false) {
            result.push(arr[i])
        }
    }

    console.log(result.join(' '))
}