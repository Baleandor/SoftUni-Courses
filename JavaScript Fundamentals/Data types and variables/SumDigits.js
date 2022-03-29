function digits(num) {
    let result = 0;
    let numString = String(num);

    for (let i = 0; i < numString.length; i++) {
        result += Number(numString[i]);
    }

    console.log(result);
}
digits(543);