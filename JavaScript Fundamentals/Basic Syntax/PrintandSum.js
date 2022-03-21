function numbers(n1, n2) {


    let sum = 0;
    let sequence = '';

    for (let i = n1; i <= n2; i++) {
        
        sum += i;
        sequence += i + " ";
    }
    console.log(sequence);
    console.log(`Sum: ${sum}`);
}
numbers(5, 10)
