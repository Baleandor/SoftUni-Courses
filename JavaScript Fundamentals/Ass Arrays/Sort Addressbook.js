function solve(input) {
    result = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        result[name] = address;
    }

    let sorted = Object.entries(result); //turning OBJECT INTO ARRAY
    sorted.sort((a, b) => { //((a, b) => a[0].localeCompare(b[0])); sorting by KEY, if a[1] - sorting by VALUE
        let nameA = a[0];
        let nameB = b[0];

        return nameA.localeCompare(nameB); //a to z, if nameB comapre nameA - Z to A
    });

    for (let [name, address] of sorted) {
        console.log(name, '->', address);
    }
}

let sortedKeys = Object.keys(ressult);
sortedKeys.sort((a, b)=>{
    console.log(a, '<->', b);
    
});