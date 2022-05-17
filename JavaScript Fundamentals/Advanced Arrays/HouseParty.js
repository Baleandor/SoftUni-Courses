function solve(arr) {
    let guestList = [];
    let reuslt = '';

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].split(' ')[0];

        if (arr[i].split(' ').includes('not')) {

            if (!guestList.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                guestList.splice(guestList.indexOf(name), 1);
            }

        } else {
            if (!guestList.includes(name)) {
                guestList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
    }

    console.log(guestList.join('\n'));
}