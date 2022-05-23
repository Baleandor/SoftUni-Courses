function Provision(input1, input2) {
    let storedProducts = {};

    for (let i = 0; i < input1.length; i += 2) {
        let currProduct = input1[i];
        storedProducts[currProduct] = Number(input1[i + 1]);
    }

    for (let i = 0; i < input2.length; i += 2) {
        let currProduct = input2[i];
        if (!storedProducts.hasOwnProperty(currProduct)) {
            storedProducts[currProduct] = 0;
        }
        storedProducts[currProduct] += Number(input2[i + 1]);
    }
    let keys = Object.keys(storedProducts);
    for (let key of keys) {
        console.log(`${key} -> ${storedProducts[key]}`);
    }
}
Provision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);