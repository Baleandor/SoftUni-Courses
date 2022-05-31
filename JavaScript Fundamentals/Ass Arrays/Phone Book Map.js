function solve(input) {

    let result = new Map();

    for (let line of input) {
        let [name, phoneNum] = line.split(' ');
        result.set(name, phoneNum);
    }

    let keys = result.keys;
    for (let key of keys) {
        console.log(key, '->', result.get(key));
    }

    // let entries = result.entries;
    // for (let [name, phoneNum] of result.entries) {
    //     console.log(name, '->', phoneNum)
    // }

    // for (let [name, phoneNum] of result) {
    //     console.log(name, '->', phoneNum)
    // }



}