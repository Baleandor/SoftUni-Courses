function solve(input) {
    let result = {};

    let sorted = input.split(' ').map(x => x.toLowerCase());
    let printResult = [];

    for (let i = 0; i < sorted.length; i++) {
        let element = sorted[i];
        if(result[element] == null){
            result[element] = 1;
        }else{
            result[element]++;
        }

    }

    for (let key in result){

        if(result[key] % 2 == 1){
            printResult.push(key);
    }
    }
    console.log(printResult.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');