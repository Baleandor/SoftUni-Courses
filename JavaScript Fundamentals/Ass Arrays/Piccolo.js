function solve(input) {

    let map = new Map();




    for (let line of input) {
        let tokens = line.split(', ');
        let command = tokens[0];
        let car = tokens[1];

        if (command == 'IN') {
            map.set(car);
        } else {
            map.delete(car);
        }
    }

    if (map.size == 0) {
        console.log("Parking Lot is Empty");
    }

    sorted = Array.from(map);
    sorted.sort();

    for (element of sorted) {
        console.log(element[0]);
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);